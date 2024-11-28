import { DateValidationOptions } from '@rline/type';
import { IsDate, ValidationOptions } from 'class-validator';
import { FutureDate } from './custom/future-date';
import { PastDate } from './custom/past-date';
import { LessThan } from './custom/less-than';
import { MoreThan } from './custom/more-than';
/**
 * @internal this is a helper decorator to create the validation decorator.
 * @param options date validation options {@link DateValidationOptions}
 * @param vo validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function DateValidation(
  options: Partial<DateValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsDate(vo)(t, p);

    const { future, lessThan, moreThan, past } = options;

    if (future) FutureDate(vo)(t, p);
    if (past) PastDate(vo)(t, p);

    if (typeof lessThan == 'string') LessThan(lessThan, vo)(t, p);
    if (typeof moreThan == 'string') MoreThan(moreThan, vo)(t, p);
  };
}
