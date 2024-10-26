import { BooleanOptions, PropertyOptions } from '@rline/type';
import { IsBoolean, ValidationOptions } from 'class-validator';

export function BooleanValidation(
  options: PropertyOptions & BooleanOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsBoolean(vo)(t, p);
  };
}
