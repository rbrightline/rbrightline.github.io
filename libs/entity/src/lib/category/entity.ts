import { Entity, IDEntity } from '@rline/orm';
import { CreateCategoryModel } from '@rline/model';
import { Dto, Property } from '@rline/property';
import { PartialType } from '@nestjs/swagger';

@Entity()
export class Category extends IDEntity {}

@Dto()
export class CreateCategoryDto implements CreateCategoryModel {
  @Property({ type: 'string', required: true, format: 'short' })
  name: string;
}

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
