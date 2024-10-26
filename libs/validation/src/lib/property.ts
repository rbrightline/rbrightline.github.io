import {
  BooleanOptions,
  DateOptions,
  NumberOptions,
  ObjectOptions,
  PropertyOptions,
  StringOptions,
} from '@rline/type';
import { StringValidation } from './string';
import { IsArray, ValidationOptions, ValidatorOptions } from 'class-validator';
import { CommonValidation } from './common';
import { NumberValidation } from './number';
import { BooleanValidation } from './boolean';
import { DateValidation } from './date';
import { ObjectValidation } from './object';

export function PropertyValidation(
  options: PropertyOptions
): PropertyDecorator {
  const vo: ValidationOptions = {
    each: !!options.isArray,
    groups: options.groups ?? undefined,
  };

  const { type, validate, isArray } = options;

  // Bypass the validation if the validate options is set false
  if (validate === false) return (t, p) => {};

  return (t, p) => {
    if (isArray === true) {
      IsArray()(t, p);
    }
    CommonValidation(options, vo)(t, p);

    if (type === 'string') StringValidation(options as StringOptions, vo)(t, p);
    else if (type === 'number')
      NumberValidation(options as NumberOptions, vo)(t, p);
    else if (type === 'boolean')
      BooleanValidation(options as BooleanOptions, vo)(t, p);
    else if (type === 'date') DateValidation(options as DateOptions, vo)(t, p);
    else if (type === 'object')
      ObjectValidation(options as ObjectOptions, vo)(t, p);
    else {
      throw new Error('Property type does not match any of PropertyType');
    }
  };
}
