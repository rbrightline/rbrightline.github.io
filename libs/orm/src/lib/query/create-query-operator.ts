import { QueryItem, QueryOperator } from '@rline/query';
import { Equal, ILike, LessThan, MoreThan, Not } from 'typeorm';

export function createQueryOperator(query: QueryItem) {
  const { operator, value } = query;

  switch (operator) {
    case QueryOperator.EQUAL:
      return Equal(value);
    case QueryOperator.CONTAIN:
      return ILike(`%${value}%`);
    case QueryOperator.LESS_THAN:
      return LessThan(value);
    case QueryOperator.MORE_THAN:
      return MoreThan(value);
    case QueryOperator.NOT_EQUAL:
      return Not(Equal(value));
    case QueryOperator.NOT_CONTAIN:
      return Not(ILike(`%${value}%`));
    default:
      return undefined;
  }
}
