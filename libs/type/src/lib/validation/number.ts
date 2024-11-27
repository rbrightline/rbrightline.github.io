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

  /**
   * define the object's property such that its value must always be more than this property's value.
   */
  moreThan: string;

  /**
   * define the object's property such that its value must always be less than this property's value.
   */
  lessThan: string;
}
