import { QueryPropertyOptions } from '@rline/type';
import { Transform } from '@rline/property';
import { isQueryString, parseQueryItem } from '@rline/query';
import { createQueryOperator } from '../query/create-query-operator';
import { parseQueryValue } from '../query/parse-query-value';

export function QueryProperty(
  options: QueryPropertyOptions
): PropertyDecorator {
  return (t, p) => {
    Transform(({ value: rawValue }: any) => {
      if (isQueryString(rawValue)) {
        const queryItem = parseQueryItem<string>(rawValue);

        if (
          queryItem &&
          queryItem.operator != undefined &&
          queryItem.value != undefined
        ) {
          const queryValue = parseQueryValue(options, queryItem.value);
          return createQueryOperator({
            operator: queryItem.operator,
            value: queryValue,
          });
        }
      }
      return undefined;
    })(t, p);
  };
}
