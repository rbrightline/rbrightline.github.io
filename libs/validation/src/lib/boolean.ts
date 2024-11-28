import { BooleanValidationOptions } from '@rline/type';
import { IsBoolean, ValidationOptions } from 'class-validator';
/**
 * @internal this is a helper decorator to create the validation decorator.
 * @param options boolean validation options {@link BooleanValidationOptions}
 * @param vo validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function BooleanValidation(
  options: Partial<BooleanValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsBoolean(vo)(t, p);
  };
}
