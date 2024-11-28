import { ArrayValidationOptions } from '@rline/type';
import { IsArray, ValidationOptions } from 'class-validator';

export function ArrayValidation(
  options: ArrayValidationOptions<any>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsArray(vo)(t, p);
  };
}
