import { ClassConstructor } from '../common/class-constructor';

export type RelationType =
  | 'many-to-many'
  | 'many-to-one'
  | 'one-to-one'
  | 'one-to-many';

export type CascadeType = 'SET NULL' | 'NO ACTION' | 'CASCADE';

export type RelationOptions = Partial<{
  type: RelationType;
  required: boolean;
  join: boolean;
  relationId: string;
  cascade: boolean;
  onDelete: CascadeType;
  onUpdate: CascadeType;
  eager: boolean;
  target: () => ClassConstructor;
}>;
