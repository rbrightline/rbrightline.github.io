import { __ValidationOptions } from './__validation';
import { ArrayValidationOptions } from './array';
import { CommonValidationOptions } from './common';
import { PrimitiveValiatinoOptions } from './primitive';

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
 * ````typescript
 * // Array validation options
 * const options: ValidationOptions = {
 *  type: "array",
 *  items:{
 *    type: "string"
 *  }
 * }
 * ````
 *
 */
export type ValidationOptions = Partial<
  CommonValidationOptions &
    (PrimitiveValiatinoOptions | ArrayValidationOptions<__ValidationOptions>)
>;
