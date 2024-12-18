import { isQueryString } from './is-query-string';
import { QUERY_DELIMETER } from './query-delimeter';
import { QueryItem } from './query-item';

export function toQueryString(queryItem: QueryItem): string | undefined {
  const queryString = `${queryItem.operator}${QUERY_DELIMETER}${queryItem.value}`;

  if (isQueryString(queryString)) return queryString;

  return undefined;
}
