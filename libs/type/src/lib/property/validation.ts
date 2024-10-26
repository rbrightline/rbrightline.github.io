import { PropertyType } from './property-type';

export type ValidationPropertyOptions = {
  /**
   * Check the value the one of {@link PropertyType}
   */
  type: PropertyType;

  /**
   * Check the value is not empty
   */
  required: boolean;

  /**
   * Check the value is unique
   */
  unique: boolean;

  /**
   * Check the value is array
   */
  isArray: boolean;

  /**
   * Indicate that the value is provided as string ( number string, boolean string, date string, JSON)
   */
  isString: boolean;

  /**
   * When true, the property is excluded
   * - The input sent by the client is ignored (the value might be set by the system)
   */
  exclude: boolean;

  /**
   * When false, the property is not validated
   */
  validate: boolean;

  /**
   * When set, the property is validated only if the group is provided
   */
  groups: string[];

  /**
   * Implement complex validation that does not fit into the provided validation operation
   * @param value
   * @returns
   */
  validator: (value: any) => any;

  /**
   * When true, the property is read only and cannot be updated.
   */
  readonly: boolean;

  /**
   * When true, the property is written only and cannot be read.
   */
  writeonly: boolean;

  /**
   * When true, the property value is hashed before saving
   */
  hash: boolean;

  /**
   * When true, the property value is encrypted before saving
   */
  encrypt: boolean;
};
