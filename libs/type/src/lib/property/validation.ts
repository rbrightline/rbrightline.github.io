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
};
