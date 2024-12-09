export type OrderDir = 'ASC' | 'DESC' | 'asc' | 'desc';

export type OrderQuery<T> = {
  /**
   * The entity key to be ordered by
   */
  orderBy: keyof T;

  /**
   * The direction of the order ascending or descending
   */
  orderDir: OrderDir;
};
