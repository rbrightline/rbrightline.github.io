import { BooleanValidationOptions } from '@rline/type';
import { IsBoolean, ValidationOptions } from 'class-validator';

export function BooleanValidation(
  options: Partial<BooleanValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsBoolean(vo)(t, p);
  };
}
