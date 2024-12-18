import { QUERY_DELIMETER } from './query-delimeter';
import { QUERY_NUMBER_EXP, QUERY_STRING_EXP } from './is-query-string';
import { QueryItem } from './query-item';

export function parseQueryString(queryString: string): QueryItem | undefined {
  if (
    QUERY_STRING_EXP.test(queryString) ||
    QUERY_NUMBER_EXP.test(queryString)
  ) {
    const [operator, value] = queryString.split(QUERY_DELIMETER);

    return { operator, value } as QueryItem;
  }

  return undefined;
}
