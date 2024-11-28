import { StringValidationOptions } from '@rline/type';
import { IsString, ValidationOptions } from 'class-validator';

export function StringValidation(
  options: StringValidationOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsString(vo)(t, p);
  };
}
