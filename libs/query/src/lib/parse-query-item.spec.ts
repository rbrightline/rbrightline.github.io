import { parseQueryItem } from './parse-query-item';

describe('isQueryString', () => {
  it.each`
    value         | expected
    ${''}         | ${undefined}
    ${'eq:'}      | ${undefined}
    ${'cn:'}      | ${undefined}
    ${'cn:some'}  | ${{ operator: 'cn', value: 'some' }}
    ${'mt:some'}  | ${{ operator: 'mt', value: 'some' }}
    ${'lt:some'}  | ${{ operator: 'lt', value: 'some' }}
    ${'neq:some'} | ${{ operator: 'neq', value: 'some' }}
    ${'ncn:some'} | ${{ operator: 'ncn', value: 'some' }}
  `('isQueryString($value) should return $expected', ({ value, expected }) => {
    expect(JSON.stringify(parseQueryItem(value))).toBe(
      JSON.stringify(expected)
    );
  });
});
