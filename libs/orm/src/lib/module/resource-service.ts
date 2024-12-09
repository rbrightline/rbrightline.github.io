import {
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ValidationError } from '@rline/property';
import {
  AddRelation,
  ID,
  RemoveRelation,
  SetRelation,
  UnsetRelation,
} from '@rline/type';
import { FindManyOptions, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CommonQueryDto } from '../dto/common-query';

export class ResourceService<T extends ID> {
  protected readonly columns: (keyof T)[];
  protected readonly logger: Logger;

  constructor(protected readonly repo: Repository<T>) {
    this.logger = new Logger(repo.metadata.targetName + 'Entity');
    this.columns = this.repo.metadata.columns.map(
      (e) => e.propertyName
    ) as (keyof T)[];
  }

  protected async uniqueValidation(entity: Partial<T>) {
    const uniques = this.repo.metadata.uniques.map((e) =>
      e.columns.map((e) => e.propertyName)
    ) as (keyof T)[][];

    for (const uniqueFields of uniques) {
      const where = uniqueFields
        .map((e) => ({ [e]: ILike(entity[e]) }))
        .reduce((p, c) => ({ ...p, ...c }));

      if (uniqueFields.length > 1) {
        const found = await this.repo.find({ where } as FindManyOptions<T>);

        if (found.length > 0) {
          const errors: ValidationError[] = uniqueFields.map((e) => {
            return {
              property: e.toString(),
              constraints: {
                unique: `${e.toString()} must be unique`,
              },
            };
          });

          throw new UnprocessableEntityException({ errors });
        }
      }
    }
  }

  protected validateEntityFields(fields: (keyof T)[]) {
    if (fields) {
      fields.forEach((e) => {
        if (this.columns.includes(e)) return;

        throw new UnprocessableEntityException(
          `The entity does not have the field ${e.toString()}`
        );
      });
    }
  }

  /**
   *
   * @param id entity id
   * @returns entity found by id or throw {@link NotFoundException}
   */
  async findOneById(id: number): Promise<T> {
    const found = await this.repo.findOneBy({ id } as FindOptionsWhere<T>);
    if (found) return found;
    throw new NotFoundException();
  }

  /**
   *
   * @param common {@link CommonQueryDto<T>}
   * @param where {@link FindOptionsWhere<T>}
   * @returns
   */
  async findAll(common: CommonQueryDto<T>, where: FindOptionsWhere<T>) {
    this.validateEntityFields(common.select);
    this.validateEntityFields([common.orderBy]);
    const { orderBy, orderDir, ...rest } = common;
    const order = { [orderBy]: orderDir } as any;
    const found = await this.repo.find({ ...rest, order, where });
    return found;
  }

  async save(entity: Partial<T>) {
    await this.uniqueValidation(entity);
    const saved = await this.repo.save(entity as T);
    return await this.findOneById(saved.id);
  }

  async update(id: number, entity: Partial<T>) {
    await this.uniqueValidation(entity);
    await this.repo.update(id, entity as any);
    return await this.findOneById(id);
  }

  async delete(id: number) {
    const found = await this.findOneById(id);
    await this.repo.softDelete(id);
    return found;
  }

  async addRelation(relation: AddRelation) {
    const { id, rid, rn } = relation;
    await this.findOneById(id);
    await this.findOneById(rid);
    await this.repo.createQueryBuilder().relation(rn).of(id).add(rid);
    return await this.findOneById(id);
  }

  async removeRelation(relation: RemoveRelation) {
    const { id, rid, rn } = relation;
    await this.findOneById(id);
    await this.findOneById(rid);
    await this.repo.createQueryBuilder().relation(rn).of(id).remove(rid);
    return await this.findOneById(id);
  }

  async setRelation(relation: SetRelation) {
    const { id, rid, rn } = relation;
    await this.findOneById(id);
    await this.findOneById(rid);
    await this.repo.createQueryBuilder().relation(rn).of(id).set(rid);
    return await this.findOneById(id);
  }

  async unsetRelation(relation: UnsetRelation) {
    const { id, rn } = relation;
    await this.findOneById(id);
    await this.repo.createQueryBuilder().relation(rn).of(id).set(null);

    return await this.findOneById(id);
  }

  async count(where: FindOptionsWhere<T>) {
    const count = await this.repo.countBy(where);
    return { count };
  }
}
