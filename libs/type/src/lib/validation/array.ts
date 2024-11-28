/**
 * Array property validation options.
 */
export class ArrayValidationOptions<T> {
  /**
   * property type
   */
  type: 'array';

  /**
   * define the `max` length of the array.
   */
  maxItems: number;

  /**
   * define the `min` length of the array.
   */
  minItems: number;

  /**
   * define the items of the array is unique or not
   */
  uniqueItems: boolean;

  /**
   * define the item's valiation options
   */
  items: T;
}
