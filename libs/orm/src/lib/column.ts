import { encode, hash } from '@rline/encrypt';
import { Property } from '@rline/property';
import { PropertyOptions } from '@rline/type';
export * from '@rline/encrypt';

import { Column as __Column, ColumnOptions, ValueTransformer } from 'typeorm';

export const HashTransformer: Readonly<ValueTransformer> = {
  to(value) {
    if (value != undefined) return hash(value);

    return value;
  },
  from(value) {
    return value;
  },
};

export const EncodeTransformer: Readonly<ValueTransformer> = {
  to(value) {
    if (value != undefined) encode(value);
    return value;
  },
  from(value) {
    return value;
  },
};

export function createColumnOptions(options: PropertyOptions): ColumnOptions {
  const co: ColumnOptions = {};

  const { type, hash, encrypt, unique } = options;

  const required = options.required === true;
  const nullable = !required;

  // Set nullable
  if (nullable === true) co.nullable = nullable;

  // Set unique
  if (unique === true) co.unique = true;

  // Set type
  if (type === 'string') co.type = 'varchar';
  else if (type === 'boolean') co.type = 'boolean';
  else if (type === 'date') co.type = 'timestamptz';
  else if (type === 'number') {
    if (options.isInt) co.type = 'integer';
    else co.type = 'numeric';
  } else if (type === 'object') {
    co.type = 'json';
  }

  // Hashing and encription
  if (hash === true) co.transformer = HashTransformer;
  else if (encrypt === true) co.transformer = EncodeTransformer;

  return co;
}

export function Column(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    Property(options)(t, p);
    __Column(createColumnOptions(options))(t, p);
  };
}
