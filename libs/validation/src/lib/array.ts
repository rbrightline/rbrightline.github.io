import { ArrayValidationOptions } from '@rline/type';
import { IsArray, ArrayMaxSize, ArrayUnique } from 'class-validator';

export function ArrayValidation(
  options: Partial<ArrayValidationOptions>
): PropertyDecorator {
  return (t, p) => {
    IsArray()(t, p);
    const { maxItems, minItems, uniqueItems } = options;

    if (maxItems != undefined) ArrayMaxSize(maxItems)(t, p);
    if (minItems != undefined) ArrayMaxSize(minItems)(t, p);
    if (uniqueItems) ArrayUnique()(t, p);
  };
}
