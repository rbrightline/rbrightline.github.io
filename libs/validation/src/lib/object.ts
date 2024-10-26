import { ObjectOptions, PropertyOptions } from '@rline/type';
import { Type } from 'class-transformer';
import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';

export function ObjectValidation(
  options: PropertyOptions & ObjectOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const { target } = options;
  return (t, p) => {
    Type(target)(t, p);
    IsObject(vo)(t, p);
    ValidateNested(vo)(t, p);
  };
}
