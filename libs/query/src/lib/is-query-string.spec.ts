import { isQueryString } from './is-query-string';

describe('isQueryString', () => {
  it.each`
    value         | expected
    ${''}         | ${false}
    ${'eq:'}      | ${false}
    ${'cn:'}      | ${false}
    ${'cn:some'}  | ${true}
    ${'mt:some'}  | ${true}
    ${'lt:some'}  | ${true}
    ${'neq:some'} | ${true}
    ${'ncn:some'} | ${true}
  `('isQueryString($value) should return $expected', ({ value, expected }) => {
    expect(isQueryString(value)).toBe(expected);
  });
});
