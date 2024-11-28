import { ObjectValidationOptions } from '@rline/type';
import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Object validation decorator
 * @param options {@link ObjectValidationOptions}
 * @param vo {@link ValidationOptions}
 * @returns {@link PropertyDecorator}
 */
export function ObjectValidation(
  options: Partial<ObjectValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (!options.target) throw new Error('target option is required!');
    IsObject(vo)(t, p);
    Type(options.target)(t, p);
    ValidateNested(vo)(t, p);
  };
}
