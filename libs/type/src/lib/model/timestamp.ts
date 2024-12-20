import { Nullable } from '../var/var';
import { IDModel } from './id';

export type TimestampModel = IDModel & {
  createdAt: Nullable<Date>;
  updatedAt: Nullable<Date>;
  deletedAt: Nullable<Date>;
};
