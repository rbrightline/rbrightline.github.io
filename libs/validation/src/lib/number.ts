import { NumberValidationOptions } from '@rline/type';
import { IsInt, IsNumber, Max, Min, ValidationOptions } from 'class-validator';
import { LessThan } from './custom/less-than';
import { MoreThan } from './custom/more-than';

/**
 * @internal this is a helper decorator to create the validation decorator.
 * @param options number validation options {@link NumberValidationOptions}
 * @param vo validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function NumberValidation(
  options: Partial<NumberValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsNumber({}, vo)(t, p);

    const { isInt, maximum, minimum, range, lessThan, moreThan } = options;

    if (isInt) IsInt(vo)(t, p);

    if (minimum != undefined) Min(minimum, vo)(t, p);
    if (maximum != undefined) Max(maximum, vo)(t, p);

    if (range != undefined) {
      Min(range[0], vo)(t, p);
      Max(range[1], vo)(t, p);
    }

    if (lessThan != undefined) LessThan(lessThan, vo)(t, p);
    if (moreThan != undefined) MoreThan(moreThan, vo)(t, p);
  };
}
