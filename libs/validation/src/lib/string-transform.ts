import { PropertyOptions } from '@rline/type';
import { Transform } from 'class-transformer';

export function JSONParseTransformer(): PropertyDecorator {
  return (t, p) => {
    Transform((value) =>
      typeof value === 'string' ? JSON.parse(value) : value
    )(t, p);
  };
}

/**
 * Transform the none-string value if it is string
 * @param options
 * @returns
 */
export function StringTransform(options: PropertyOptions): PropertyDecorator {
  const { type, isArray } = options;
  return (t, p) => {
    if (type === 'string') {
      if (isArray == true) {
        JSONParseTransformer()(t, p);
      }
    } else if (type === 'number') {
      JSONParseTransformer()(t, p);
    } else if (type === 'boolean') {
      JSONParseTransformer()(t, p);
    } else if (type === 'date') {
    } else if (type === 'object') {
      JSONParseTransformer()(t, p);
    }
  };
}
