import { CommonValidationOptions } from './common';
import { PrimitiveValiatinoOptions } from './primitive';

export type __ValidationOptions = Partial<
  CommonValidationOptions & PrimitiveValiatinoOptions
>;
