import { isQueryString } from './is-query-string';
import { QueryOperator } from './operator';

/**
 * Create a query string and validate it. If the created query string is valid, then return it else return undefined.
 * @param operator {@link QueryOperator}
 * @param search {string} search string
 * @returns {string} query string
 *
 * ````typescript
 * const result =  createQueryString(QueryOperator.EQUAL, 'hello')
 * assert(result == "eq:hello")
 * ````
 *
 * ````typescript
 * const result =  createQueryString('unkown', 'hello')
 * assert(result == undefined);
 * ````
 */
export function createQueryItem(
  operator: QueryOperator,
  search: string
): string | undefined {
  if (operator && search) {
    const queryString = `${operator}:${search}`;
    if (isQueryString(queryString)) return queryString;
  }
  return undefined;
}
