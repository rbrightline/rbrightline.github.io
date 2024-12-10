import {
  Column,
  Entity,
  IDEntity,
  QueryProperty,
  FindOperator,
  IDView,
  ViewEntity,
  ViewColumn,
  QueryIDDto,
} from '@rline/orm';
import {
  CategoryModel,
  CategoryViewEntity,
  CreateCategoryModel,
  QueryCategoryModel,
} from '@rline/model';
import { Dto, Property } from '@rline/property';
import { PartialType } from '@nestjs/swagger';

@Entity()
export class Category extends IDEntity implements CategoryModel {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('m.id', 'id')
      .addSelect('m.name', 'name')
      .from(Category, 'm');
  },
})
export class CategoryView extends IDView implements CategoryViewEntity {
  @ViewColumn({ type: 'string' }) name: string;
}

@Dto()
export class CreateCategoryDto implements CreateCategoryModel {
  @Property({ type: 'string', required: true, format: 'short' }) name: string;
}

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

@Dto()
export class QueryCategoryDto
  extends QueryIDDto
  implements QueryCategoryModel<FindOperator<any>>
{
  @QueryProperty({ type: 'string' }) name: FindOperator<string>;
}
