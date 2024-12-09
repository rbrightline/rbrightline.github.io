import {
  RestResourceBuilder,
  Params,
  BodyParams,
  QueryParams,
  IDParam,
} from '@rline/rest';
import { ResourcePathBuilder } from '@rline/path';

import {
  Category,
  CategoryView,
  CreateCategoryDto,
  QueryCategoryDto,
  UpdateCategoryDto,
} from '@rline/entity';
import {
  AddRelationDto,
  CommonQueryDto,
  InjectResourceService,
  RemoveRelationDto,
  ResourceService,
  SetRelationDto,
  UnsetRelationDto,
} from '@rline/orm';

export const CategoryPaths = new ResourcePathBuilder({
  singular: 'category',
  plural: 'categories',
});

export const CategoryResource = new RestResourceBuilder({
  path: CategoryPaths,
});

@CategoryResource.Controller()
export class CategoryController {
  constructor(
    @InjectResourceService(Category)
    protected readonly service: ResourceService<Category>,
    @InjectResourceService(CategoryView)
    protected readonly viewService: ResourceService<Category>
  ) {}

  @CategoryResource.FindOneById()
  async findOneById(@IDParam() id: number) {
    return await this.viewService.findOneById(id);
  }

  @CategoryResource.FindAll()
  async findAll(
    @QueryParams() common: CommonQueryDto<Category>,
    @QueryParams() where: QueryCategoryDto
  ) {
    return await this.viewService.findAll(common, where);
  }

  @CategoryResource.Save()
  save(@BodyParams() dto: CreateCategoryDto) {
    return this.service.save(dto);
  }

  @CategoryResource.Update()
  async update(@IDParam() id: number, @BodyParams() dto: UpdateCategoryDto) {
    return await this.service.update(id, dto);
  }

  @CategoryResource.AddRelation()
  async addRelation(@Params() relation: AddRelationDto) {
    return await this.service.addRelation(relation);
  }

  @CategoryResource.RemoveRelation()
  async removeRelation(@Params() relation: RemoveRelationDto) {
    return await this.service.removeRelation(relation);
  }

  @CategoryResource.SetRelation()
  async setRelation(@Params() relation: SetRelationDto) {
    return await this.service.setRelation(relation);
  }
  @CategoryResource.UnsetRelation()
  async unsetsetRelation(@Params() relation: UnsetRelationDto) {
    return await this.service.unsetRelation(relation);
  }

  @CategoryResource.Count()
  async count(@QueryParams() query: QueryCategoryDto) {
    return await this.service.count(query);
  }
}
