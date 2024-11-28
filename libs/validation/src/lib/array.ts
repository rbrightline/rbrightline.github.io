import { ArrayValidationOptions, ValidationOptions } from '@rline/type';
import { IsArray, ArrayMaxSize, ArrayUnique } from 'class-validator';

/**
 * @internal this is a helper decorator to create the validation decorator.
 * @param options arrray validation options {@link ArrayValidationOptions}
 * @param vo validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function ArrayValidation(
  options: Partial<ArrayValidationOptions<ValidationOptions>>
): PropertyDecorator {
  return (t, p) => {
    IsArray()(t, p);
    const { maxItems, minItems, uniqueItems } = options;

    if (maxItems != undefined) ArrayMaxSize(maxItems)(t, p);
    if (minItems != undefined) ArrayMaxSize(minItems)(t, p);
    if (uniqueItems) ArrayUnique()(t, p);
  };
}
