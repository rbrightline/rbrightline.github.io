import { PropertyOptions } from '@rline/type';
import { ViewColumn as VC } from 'typeorm';
import { Property } from '@rline/property';

export function ViewColumn(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    VC()(t, p);
    Property(options)(t, p);
  };
}
