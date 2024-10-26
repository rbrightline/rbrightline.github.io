import { DateOptions, PropertyOptions } from '@rline/type';
import { IsDate, MaxDate, MinDate, ValidationOptions } from 'class-validator';

export function DateValidation(
  options: PropertyOptions & DateOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const { past, future, maxDate, minDate } = options;
  return (t, p) => {
    IsDate(vo)(t, p);

    if (past == true) MaxDate(() => new Date(), vo)(t, p);
    if (future == true) MinDate(() => new Date(), vo)(t, p);

    if (maxDate != undefined) MaxDate(maxDate, vo);
    if (minDate != undefined) MinDate(minDate, vo);
  };
}
