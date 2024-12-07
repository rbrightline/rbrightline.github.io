import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationOptions as TypeormRelationOptions,
} from 'typeorm';
import { BaseEntity } from '../base/entity';
import { Property } from '@rline/property';

export function Relation<T extends BaseEntity>(
  options: any
): PropertyDecorator {
  return (t, p) => {
    const type = options.type;
    const target = options.target;
    const relationId = options.relationId as keyof T;

    if (!target) throw new Error('Target is required!');

    const relationOptions: TypeormRelationOptions = {
      cascade: options.cascade,
      onDelete: options.onDelete,
      onUpdate: options.onUpdate,
      nullable: options.required !== true,
    };

    Property({ type: 'object', required: options.required })(t, p);

    if (type === 'man-to-many') {
      ManyToMany<T>(
        () => options.target,
        (e) => e[relationId],
        relationOptions
      )(t, p);
      if (options.join) JoinTable()(t, p);
    } else if (type === 'many-to-one') {
      ManyToOne<T>(
        () => options.target,
        (e) => e[relationId],
        relationOptions
      )(t, p);

      if (options.join) JoinColumn()(t, p);
    } else if (type == 'one-to-many') {
      OneToMany<T>(
        () => options.target,
        (e) => e[relationId],
        relationOptions
      )(t, p);
      if (options.join) JoinTable()(t, p);
    } else if (type == 'one-to-one') {
      OneToOne<T>(
        () => options.target,
        (e) => e[relationId],
        relationOptions
      )(t, p);

      if (options.join) JoinColumn()(t, p);
    }
  };
}
