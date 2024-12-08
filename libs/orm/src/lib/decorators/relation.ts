import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationOptions as TypeormRelationOptions,
} from 'typeorm';

import { Property } from '@rline/property';
import { RelationOptions } from '@rline/type';
import { IDEntity } from '../base/id';

export function Relation<T extends IDEntity>(
  options: RelationOptions
): PropertyDecorator {
  return (t, p) => {
    const type = options.type;
    const target = options.target;
    const relationId = options.relationId as keyof T;

    if (!target) throw new Error('Target is required!');

    const relationOptions: TypeormRelationOptions = {
      eager: options.eager || false,
      cascade: options.cascade || false,
      onDelete: options.onDelete || 'SET NULL',
      onUpdate: options.onUpdate || 'NO ACTION',
      nullable: options.required !== true,
    };

    Property({
      type: 'object',
      required: options.required,
      target: options.target,
    })(t, p);

    if (type === 'many-to-many') {
      ManyToMany<T>(target, (e) => e[relationId], relationOptions)(t, p);
      if (options.join) JoinTable()(t, p);
    } else if (type === 'many-to-one') {
      ManyToOne<T>(target, (e) => e[relationId], relationOptions)(t, p);
      if (options.join) JoinColumn()(t, p);
    } else if (type == 'one-to-many') {
      OneToMany<T>(target, (e) => e[relationId], relationOptions)(t, p);
      if (options.join) JoinTable()(t, p);
    } else if (type == 'one-to-one') {
      OneToOne<T>(target, (e) => e[relationId], relationOptions)(t, p);
      if (options.join) JoinColumn()(t, p);
    }
  };
}
