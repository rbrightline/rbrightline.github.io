import { ID } from '../model';
import { ObjectType } from './constructor';
import { CascadeType, OnDeleteType, RelationType } from './relation-type';

export type PropertyRelationOptions = {
  relationType: RelationType;
  target: <T extends ID>() => ObjectType<T>;
  targetName: string;
  join: boolean;
  onDelete: OnDeleteType;
  cascade: CascadeType;
  eager: boolean;
};
