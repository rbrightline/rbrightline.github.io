import { isQueryString } from './is-query-string';
import { QueryItem } from './query-item';
import { QUERY_STRING_DELIMETER } from './query-pattern';

/**
 * Parse query string into {@link QueryItem}.
 * @param queryString string value that delimeted by {@link QUERY_STRING_DELIMETER}. The first part must be {@link QueryOperator} and the second part is string value that not longer than 100 characters.
 * @returns {@link QueryItem | undefined}
 *
 * ````typescript
 * let result =  parseQueryItem('eq:some');
 * assert(result.operator == "eq")
 * assert(result.value == "some")
 * ````
 *
 * ````typescript
 * let result =  parseQueryItem('unkown:some');
 * assert(result == undefined)
 * ````
 */
export function parseQueryItem(queryString: string): QueryItem | undefined {
  if (isQueryString(queryString)) {
    const [operator, value] = queryString.split(QUERY_STRING_DELIMETER);
    return {
      operator,
      value,
    } as QueryItem;
  }

  return undefined;
}
