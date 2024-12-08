import { RestResourceBuilder } from '@rline/rest';
import { ResourcePathBuilder } from '@rline/path';

export const CategoryPaths = new ResourcePathBuilder({
  singular: 'category',
  plural: 'categories',
});

export const CategoryResource = new RestResourceBuilder({
  path: CategoryPaths,
});

@CategoryResource.Controller()
export class CategoryController {
  @CategoryResource.AddRelation()
  addRelation() {
    return 'addRelation';
  }

  @CategoryResource.Count()
  count() {
    return 'count';
  }

  @CategoryResource.Delete()
  delete() {
    return 'delete';
  }

  @CategoryResource.FindAll()
  findAll() {
    return 'findAll';
  }

  @CategoryResource.FindOneById()
  findOneById() {
    return 'findOneById';
  }

  @CategoryResource.Metadata()
  metadata() {
    return 'metadata';
  }

  @CategoryResource.RemoveRelation()
  removeRelation() {
    return 'removeRelation';
  }

  @CategoryResource.Save()
  save() {
    return 'save';
  }

  @CategoryResource.SetRelation()
  setRelation() {
    return 'setRelation';
  }

  @CategoryResource.UnsetRelation()
  unsetRelation() {
    return 'unsetRelation';
  }

  @CategoryResource.Update()
  update() {
    return 'update';
  }
}
