import { NumberOptions, PropertyOptions } from '@rline/type';
import { IsInt, IsNumber, Max, Min, ValidationOptions } from 'class-validator';

export function NumberValidation(
  options: PropertyOptions & NumberOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const { isInt, minimum, maximum } = options;
  return (t, p) => {
    IsNumber(undefined, vo)(t, p);
    if (isInt === true) IsInt(vo)(t, p);

    if (minimum != undefined) Min(minimum, vo)(t, p);
    if (maximum != undefined) Max(maximum, vo)(t, p);
  };
}
