import { DateValidationOptions } from '@rline/type';
import { IsDate, ValidationOptions } from 'class-validator';

export function DateValidation(
  options: DateValidationOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsDate(vo)(t, p);
  };
}
