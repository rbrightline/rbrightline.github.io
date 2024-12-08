import { StringFormats } from './string-format';

/**
 * String property validation options
 */
export class StringValidationOptions {
  /**
   * define the property type
   */
  type: 'string';

  /**
   * define the `min` allowed length of the string.
   */
  minLength: number;

  /**
   * define the `max` allowed legnth of the string.
   */
  maxLength: number;

  /**
   * define the `format` of the string {@link StringFormat}.
   */
  format: StringFormats;

  /**
   * define the `pattern` of the string
   */
  pattern: string;

  /**
   * define the `allowed` string values
   */
  isIn: string[];

  /**
   * define the `blacklist`
   */
  isNotIn: string[];
}
