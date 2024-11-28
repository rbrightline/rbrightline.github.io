import { PropertyType } from '@rline/type';
import { ColumnType } from 'typeorm';

export function columnType(type: PropertyType): ColumnType {
  if (type === 'array') {
    return 'varchar';
  } else if (type === 'boolean') {
    return 'boolean';
  } else if (type === 'date') {
    return 'timestamp';
  } else if (type === 'number') {
    return 'numeric';
  } else if (type === 'object') {
    return 'varchar';
  } else if (type === 'string') {
    return 'varchar';
  }

  throw new Error(`Invalid column type ${type}`);
}
