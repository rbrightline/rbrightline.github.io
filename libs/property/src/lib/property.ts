import { PropertyOptions } from '@rline/type';
import { ApiProperty } from './api-property';
import { Validation } from '@rline/validation';
export function Property(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    ApiProperty(options)(t, p);
    Validation(options)(t, p);
  };
}
