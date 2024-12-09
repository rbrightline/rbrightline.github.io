import {
  Column,
  Entity,
  IDEntity,
  QueryProperty,
  FindOperator,
} from '@rline/orm';
import {
  AttributeModel,
  CreateAttributeModel,
  QueryAttributeModel,
} from '@rline/model';
import { Dto, Property } from '@rline/property';
import { PartialType } from '@nestjs/swagger';

@Entity<Attribute>({ uniques: ['key', 'value'] })
export class Attribute extends IDEntity implements AttributeModel {
  @Column({ type: 'string', required: true }) key: string;
  @Column({ type: 'string', required: true }) value: string;
}

@Dto()
export class CreateAttributeDto implements CreateAttributeModel {
  @Property({ type: 'string', required: true, format: 'short' }) key: string;
  @Property({ type: 'string', required: true, format: 'long' }) value: string;
}

@Dto()
export class UpdateAttributeDto extends PartialType(CreateAttributeDto) {}

@Dto()
export class QueryAttributeDto
  implements QueryAttributeModel<FindOperator<AttributeModel>>
{
  @QueryProperty({ type: 'string' }) key: FindOperator<AttributeModel>;
  @QueryProperty({ type: 'string' }) value: FindOperator<AttributeModel>;
}
