import { ID } from '../model/id';

export type SelectFieldsQuery<T extends ID> = {
  select: (keyof T)[];
};
