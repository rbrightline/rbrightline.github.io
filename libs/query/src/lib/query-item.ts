import { QueryOperator } from './operator';

/**
 * Single query item object
 */
export class QueryItem<T = unknown> {
  /**
   * Query operator {@link QueryOperator}
   */
  operator: QueryOperator;

  /**
   * Query search string
   */
  value: T;
}
