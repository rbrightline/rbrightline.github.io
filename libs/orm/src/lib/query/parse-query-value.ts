import { isDateString } from '@rline/property';
import { PropertyOptions } from '@rline/type';

export function parseQueryValue(options: PropertyOptions, value: string) {
  const type = options.type;
  switch (type) {
    case 'string':
      return value;
    case 'boolean':
      if (value === 'true') return true;
      else if (value === 'false') return false;
      return undefined;
    case 'date':
      if (isDateString(value)) return new Date(value);
      return undefined;
    case 'number':
      return parseFloat(value);
    default:
      return undefined;
  }
}
