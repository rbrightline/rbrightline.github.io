import { NumberValidationOptions } from '@rline/type';
import { IsNumber, ValidationOptions } from 'class-validator';

export function NumberValidation(
  options: NumberValidationOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsNumber({}, vo)(t, p);
  };
}
