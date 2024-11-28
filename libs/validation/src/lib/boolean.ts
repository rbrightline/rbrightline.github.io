import { BooleanValidationOptions } from '@rline/type';
import { IsBoolean, ValidationOptions } from 'class-validator';

export function BooleanValidation(
  options: BooleanValidationOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsBoolean(vo)(t, p);
  };
}
