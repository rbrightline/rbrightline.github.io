import { createQueryItem } from './create-query-item';
import { QueryOperator } from './operator';

describe('createQueryItem', () => {
  it.each`
    operator                     | value        | expected
    ${undefined}                 | ${undefined} | ${undefined}
    ${undefined}                 | ${'some'}    | ${undefined}
    ${'unkown'}                  | ${undefined} | ${undefined}
    ${'unkown'}                  | ${'some'}    | ${undefined}
    ${QueryOperator.CONTAIN}     | ${undefined} | ${undefined}
    ${QueryOperator.CONTAIN}     | ${'some'}    | ${'cn:some'}
    ${QueryOperator.EQUAL}       | ${'some'}    | ${'eq:some'}
    ${QueryOperator.LESS_THAN}   | ${'some'}    | ${'lt:some'}
    ${QueryOperator.MORE_THAN}   | ${'some'}    | ${'mt:some'}
    ${QueryOperator.NOT_CONTAIN} | ${'some'}    | ${'ncn:some'}
    ${QueryOperator.NOT_EQUAL}   | ${'some'}    | ${'neq:some'}
  `(
    'createQueryItem($operator, $value) should return $expected',
    ({ operator, value, expected }) => {
      const result = createQueryItem(operator, value);

      expect(result).toBe(expected);
    }
  );
});
