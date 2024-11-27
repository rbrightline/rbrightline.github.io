/**
 * Common validation options used by any property type
 */
export class CommonValidationOptions {
  /**
   * define the value is `array` or not.
   */
  isArray: boolean;

  /**
   * define the property is `required` or not.
   */
  required: boolean;

  /**
   * define the property is `unique` or not.
   */
  unique: boolean;

  /**
   * define the property is `passed as string value`. This is for properties that is provided as string but used as different type, for example, provided string and used as number. If `true`, string value is transformed into the provided property type before validation.
   */
  isString: boolean;

  /**
   * define the property is `validated or not`.
   */
  notValidate: boolean;

  /**
   * define the property is excluded or not.
   */
  exclude: boolean;
}
