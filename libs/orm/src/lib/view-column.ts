import { ViewColumn as __ViewColumn } from 'typeorm';
import { PropertyOptions } from '@rline/type';
import { Property } from '@rline/property';

export function ViewColumn(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    __ViewColumn()(t, p);
    Property(options)(t, p);
  };
}
