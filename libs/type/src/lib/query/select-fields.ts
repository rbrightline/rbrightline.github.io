import { ID } from '../model/id';

export type SelectFieldsQuery<T extends ID> = {
  /**
   * The entity fields to be loaded
   */
  select: (keyof T)[];
};
