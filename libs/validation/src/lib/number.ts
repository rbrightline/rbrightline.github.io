import { NumberValidationOptions } from '@rline/type';
import { IsInt, IsNumber, Max, Min, ValidationOptions } from 'class-validator';

export function NumberValidation(
  options: Partial<NumberValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsNumber({}, vo)(t, p);

    const { isInt, maximum, minimum, range } = options;

    if (isInt) IsInt(vo)(t, p);

    if (minimum != undefined) Min(minimum, vo)(t, p);
    if (maximum != undefined) Max(maximum, vo)(t, p);

    if (range != undefined) {
      Min(range[0], vo)(t, p);
      Max(range[1], vo)(t, p);
    }
  };
}
