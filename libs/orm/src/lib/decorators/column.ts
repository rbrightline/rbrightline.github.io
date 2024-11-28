import { PropertyOptions } from '@rline/type';
import { Column as Col } from 'typeorm';
import { columnType } from '../common/column-type';
import { Property } from '@rline/property';

export function Column(options: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    if (!options.type) throw new Error('column type is required!');

    const type = columnType(options.type);

    const required = options.required == true ? true : false;
    const nullable = !required;

    Col({ type, nullable, update: options.update })(t, p);

    Property(options)(t, p);
  };
}
