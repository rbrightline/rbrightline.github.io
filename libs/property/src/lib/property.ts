import { PropertyValidation } from '@rline/validation';
import { PropertyOptions } from '@rline/type';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';


export function Property(options: PropertyOptions): PropertyDecorator {
  const required = options.required === true;
  const nullable = !required;
  const apiPropertyOptions: ApiPropertyOptions = {
    ...options,
    required,
    nullable,
  };
  return (t, p) => {
    ApiProperty(apiPropertyOptions)(t, p);
    PropertyValidation(options)(t, p);
  };
}
