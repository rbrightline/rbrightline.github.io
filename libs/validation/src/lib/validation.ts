import { ValidationOptions } from '@rline/type';
import { ValidationOptions as __ValidationOptions } from 'class-validator';
import { ArrayValidation } from './array';
import { BooleanValidation } from './boolean';
import { DateValidation } from './date';
import { NumberValidation } from './number';
import { ObjectValidation } from './object';
import { StringValidation } from './string';
import { CommonValidation } from './common';

export function PrimitiveValiation(
  options: ValidationOptions,
  vo: __ValidationOptions
): PropertyDecorator {
  const type = options.type;
  return (t, p) => {
    switch (type) {
      case 'boolean':
        BooleanValidation(options, vo)(t, p);
        break;
      case 'date':
        DateValidation(options, vo)(t, p);
        break;
      case 'number':
        NumberValidation(options, vo)(t, p);
        break;
      case 'object':
        ObjectValidation(options, vo)(t, p);
        break;
      case 'string':
        StringValidation(options, vo)(t, p);
        break;
    }
  };
}
/**
 * @param  name required validation name
 * @returns validation error message
 *
 */
export function Validation(options: ValidationOptions): PropertyDecorator {
  return (t, p) => {
    if (options.notValidate) return;

    const { type } = options;

    switch (type) {
      case 'array':
        ArrayValidation(options)(t, p);
        CommonValidation(options, { each: true })(t, p);
        PrimitiveValiation(options, { each: true })(t, p);
        break;

      case 'boolean':
      case 'date':
      case 'number':
      case 'object':
      case 'string':
        CommonValidation(options, {})(t, p);
        PrimitiveValiation(options, {})(t, p);
        break;
      default:
        throw new Error('type must be PropertyType');
    }
  };
}
