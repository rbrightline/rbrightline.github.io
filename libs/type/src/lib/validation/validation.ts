import { BooleanValidationOptions } from './boolean';
import { CommonValidationOptions } from './common';
import { DateValidationOptions } from './date';
import { NumberValidationOptions } from './number';
import { ObjectValidationOptions } from './object';
import { StringValidationOptions } from './string';

/**
 * Property validation options
 *
 * @example
 * ## String validation options
 * ````typescript
 * const options: ValidationOptions = {
 *  type: "string",
 *  minLength: 3,
 *  maxLength: 30,
 *  format: StringFormat.Password,
 *  pattern: '/(regular-expression)/'
 * }
 *
 * ````
 * ## Number validation options
 * ````typescript
 * const options: ValidationOptions = {
 *  type: "number",
 *  minimum: 1,
 *  maximum: 100,
 *  range: [1, 100],
 *  isInt: true
 * }
 *
 * ## Boolean validation options
 * ````typescript
 * const options: ValidationOptions = {
 *  type: "boolean",
 * }
 *
 * ````
 *
 */
export type ValidationOptions = Partial<
  CommonValidationOptions &
    (
      | BooleanValidationOptions
      | DateValidationOptions
      | NumberValidationOptions
      | ObjectValidationOptions
      | StringValidationOptions
    )
>;
