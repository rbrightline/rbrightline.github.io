import { Nullable } from '../var/var';
import { TimestampModel } from './timestamp';

export type ActiveModel = TimestampModel & {
  active: Nullable<boolean>;
};
