import { CommonValidationOptions } from '@rline/type';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidationOptions } from 'class-validator';

export function CommonValidation(
  options: Partial<CommonValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    const { required, exclude, isString } = options;

    if (required == true) {
      IsNotEmpty(vo)(t, p);
    } else {
      IsOptional(vo)(t, p);
    }

    if (exclude) {
      Exclude()(t, p);
    } else {
      Expose()(t, p);
    }

    if (isString) {
      Transform(({ value }) =>
        typeof value === 'string' ? JSON.parse(value) : value
      )(t, p);
    }
  };
}
