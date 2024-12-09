import { ID } from '@rline/type';

export type CategoryModel = {
  name: string;
};

export type CategoryEntity = CategoryModel & ID;

export type CategoryViewEntity = CategoryEntity;

export type CreateCategoryModel = CategoryModel;

export type UdpateCategoryModel = CreateCategoryModel;

export type QueryCategoryModel<T> = Record<keyof CategoryViewEntity, T>;
