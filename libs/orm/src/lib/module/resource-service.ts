import { ID } from '@rline/type';
import { Repository } from 'typeorm';

export class ResourceService<T extends ID> {
  constructor(protected readonly repo: Repository<T>) {}

  findAll(paginator: any) {
    return this.repo.find({
      take: 1,
      skip: 1,
      where: {},
      select: [],
      loadEagerRelations: true,
      loadRelationIds: true,
    });
  }
}
