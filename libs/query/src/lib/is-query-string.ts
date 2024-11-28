import { QUERY_PATTERN } from './query-pattern';

/**
 * Check the value is a valid query string or not.
 * @param value query string
 * @returns {boolean} if the query string is valid, then return `true` else `false`.
 *
 * ````typescript
 * let result = isQueryString('sample');
 * assert(result == false)
 * ````
 *
 * ````typescript
 * let result = isQueryString('ch:');
 * assert(result == false)
 * ````
 *
 * ````typescript
 * let result = isQueryString('ch:some');
 * assert(result == true)
 * ````
 */
export function isQueryString(value: string): boolean {
  return QUERY_PATTERN.test(value);
}
