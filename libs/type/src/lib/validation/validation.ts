import { BooleanValidationOptions } from './boolean';
import { CommonValidationOptions } from './common';
import { DateValidationOptions } from './date';
import { NumberValidationOptions } from './number';
import { ObjectValidationOptions } from './object';
import { StringValidationOptions } from './string';

/**
 * Property validation options
 *
 * ````typescript
 * // String validation options
 * const stringOptions: ValidationOptions = {
 *  type: "string",
 *  minLength: 3,
 *  maxLength: 30,
 *  format: StringFormat.Password,
 *  pattern: '/(regular-expression)/'
 * }
 * ````
 *
 * ````typescript
 *  // Number validation options
 * const options: ValidationOptions = {
 *  type: "number",
 *  minimum: 1,
 *  maximum: 100,
 *  range: [1, 100],
 *  isInt: true
 * }
 * ````
 *
 * ````typescript
 *  // Date validation options
 * const options: ValidationOptions = {
 *  type: "date",
 *  past: true,
 *  future: true
 * }
 * ````
 *
 * ````typescript
 * // Boolean validation options
 * const options: ValidationOptions = {
 *  type: "boolean",
 * }
 * ````
 *
 * ````typescript
 * // Object validation options
 * const options: ValidationOptions = {
 *  type: "object",
 *  target: ()=> TargetClass
 * }
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
