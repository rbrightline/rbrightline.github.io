import { BooleanValidationOptions } from './boolean';
import { DateValidationOptions } from './date';
import { NumberValidationOptions } from './number';
import { ObjectValidationOptions } from './object';
import { StringValidationOptions } from './string';

export type PrimitiveValiatinoOptions =
  | BooleanValidationOptions
  | DateValidationOptions
  | NumberValidationOptions
  | ObjectValidationOptions
  | StringValidationOptions;
