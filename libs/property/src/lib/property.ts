import { PropertyOptions } from '@rline/type';
import { Validation } from '@rline/validation';
import { ApiProperty } from './api-property';

export function Property(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    ApiProperty(options)(t, p);
    Validation(options)(t, p);
  };
}
