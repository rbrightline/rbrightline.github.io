import {
  BooleanOptions,
  DateOptions,
  NumberOptions,
  ObjectOptions,
  PropertyOptions,
  StringOptions,
} from '@rline/type';
import { StringValidation } from './string';
import { ValidationOptions } from 'class-validator';
import { CommonValidation } from './common';
import { NumberValidation } from './number';
import { BooleanValidation } from './boolean';
import { DateValidation } from './date';
import { ObjectValidation } from './object';

export function PropertyValidation(
  options: PropertyOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const { type, validate } = options;

  // Bypass the validation if the validate options is set false
  if (validate === false) return (t, p) => {};

  return (t, p) => {
    CommonValidation(options, vo)(t, p);

    if (type === 'string') StringValidation(options as StringOptions, vo);
    else if (type === 'number') NumberValidation(options as NumberOptions, vo);
    else if (type === 'boolean')
      BooleanValidation(options as BooleanOptions, vo);
    else if (type === 'date') DateValidation(options as DateOptions, vo);
    else if (type === 'object') ObjectValidation(options as ObjectOptions, vo);
    else {
      throw new Error('Property type does not match any of PropertyType');
    }
  };
}
