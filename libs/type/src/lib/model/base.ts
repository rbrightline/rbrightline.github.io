import { Nullable } from '../var/var';
import { ActiveModel } from './active';

export type BaseModel = ActiveModel & {
  info: Nullable<string>;
  updatedBy: Nullable<number>;
};
