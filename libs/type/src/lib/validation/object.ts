import { ClassConstructor } from '../common/class-constructor';

/**
 * Object property validation options.
 */
export class ObjectValidationOptions {
  /**
   * property type.
   */
  type: 'object';

  /**
   * define the target `object` type. The target should be a data transfer object.
   */
  target: () => ClassConstructor;
}
