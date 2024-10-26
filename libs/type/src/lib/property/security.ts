export type SecurityPropertyOptions = {
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
