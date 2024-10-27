import { Property } from '@rline/property';
import { PropertyOptions } from '@rline/type';
import {
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
  RelationOptions,
  JoinTable,
  JoinColumn,
} from 'typeorm';

export function Relation(options: PropertyOptions): PropertyDecorator {
  const { relationType: rt, onDelete, cascade, eager } = options;

  const required = options.required == true;
  const nullable = !required;
  const target = options.target ?? options.targetName;

  if (!target) throw new Error('target property is required!');

  const ro: RelationOptions = {
    cascade,
    eager,
    nullable,
    onDelete,
  };

  return (t, p) => {
    Property(options)(t, p);

    if (rt === 'many-to-many') {
      ManyToMany(target, (t) => t.id, ro)(t, p);
      if (options.join == true) JoinTable()(t, p);
    } else if (rt === 'many-to-one') {
      ManyToOne(target, (t) => t.id, ro);
      if (options.join == true) JoinColumn()(t, p);
    } else if (rt === 'one-to-many') {
      OneToMany(target, (t) => t.id, ro);
      if (options.join == true) JoinTable()(t, p);
    } else if (rt === 'one-to-one') {
      OneToOne(target, (t) => t.id, ro);
      if (options.join == true) JoinColumn()(t, p);
    } else {
      throw new Error('Relation type must be one of RelationType');
    }
  };
}
