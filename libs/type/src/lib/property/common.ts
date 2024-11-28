import { CommonValidationOptions } from '../validation/common';

/**
 * Common property options.
 */
export class CommonPropertyOptions extends CommonValidationOptions {
  /**
   * provide a short description of the property.
   */
  description: string;

  /**
   * provide an example value of the property.
   */
  example: unknown;

  /**
   * provide examples value of the property.
   */
  examples: unknown;

  /**
   * define the property's default value.
   */
  default: unknown;

  /**
   * define the property's value is hashed.
   */
  hash: boolean;

  /**
   * define the property's value is encrypted.
   */
  encrypt: boolean;

  /**
   * define a name to be used in database views.
   */
  viewAlias: string;
}
