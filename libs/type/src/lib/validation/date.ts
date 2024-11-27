/**
 * Date property validation options.
 */
export class DateValidationOptions {
  /**
   * property type.
   */
  type: 'date';

  /**
   * define the `minimum` value of the date must be after current timestamp.
   */
  future: boolean;

  /**
   * define the `maximum` value of the date must be before current timestamp.
   */
  past: boolean;
}
