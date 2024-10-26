import { PropertyOptions } from '@rline/type';
import { IsNotEmpty, IsOptional, ValidationOptions } from 'class-validator';

/**
 * Check the common validation
 * - Required
 * @param options
 * @returns
 */
export function CommonValidation(
  options: PropertyOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const { required } = options;
  return (t, p) => {
    if (required === true) {
      IsNotEmpty(vo)(t, p);
    } else {
      IsOptional(vo)(t, p);
    }
  };
}
