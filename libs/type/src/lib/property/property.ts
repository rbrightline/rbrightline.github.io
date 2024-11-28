import { ValidationOptions } from '../validation/validation';
import { CommonPropertyOptions } from './common';

/**
 * Property options
 *
 * ````typescript
 * // String property options
 * const stringOptions: PropertyOptions = {
 *  type: "string",
 *  minLength: 3,
 *  maxLength: 30,
 *  format: StringFormat.Password,
 *  pattern: '/(regular-expression)/'
 * }
 * ````
 *
 * ````typescript
 *  // Number property options
 * const options: PropertyOptions = {
 *  type: "number",
 *  minimum: 1,
 *  maximum: 100,
 *  range: [1, 100],
 *  isInt: true
 * }
 * ````
 *
 * ````typescript
 *  // Date property options
 * const options: PropertyOptions = {
 *  type: "date",
 *  past: true,
 *  future: true
 * }
 * ````
 *
 * ````typescript
 * // Boolean property options
 * const options: PropertyOptions = {
 *  type: "boolean",
 * }
 * ````
 *
 * ````typescript
 * // Object property options
 * const options: PropertyOptions = {
 *  type: "object",
 *  target: ()=> TargetClass
 * }
 * ````
 *
 * ````typescript
 * // Array property options
 * const options: PropertyOptions = {
 *  type: "array",
 *  items:{
 *    type: "string"
 *  }
 * }
 * ````
 *
 */
export type PropertyOptions = ValidationOptions & CommonPropertyOptions;
