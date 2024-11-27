/**
 * Number property validation options.
 */
export class NumberValidationOptions {
  /**
   * define the property type
   */
  type: 'number';

  /**
   * define the `minimum` allowed value of the number.
   */
  minimum: number;

  /**
   * define the `maximum` allowed value of the number.
   */
  maximum: number;

  /**
   * define the number is `integer` or not.
   */
  isInt: boolean;

  /**
   * define the allowed rage of numbers.
   */
  range: [number, number];
}
