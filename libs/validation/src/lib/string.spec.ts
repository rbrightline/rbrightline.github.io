import { testProperty } from './utils.spec';

describe('StringValidation', () => {
  it.each`
    value        | required     | isArray      | errors
    ${undefined} | ${undefined} | ${undefined} | ${undefined}
    ${1}         | ${undefined} | ${undefined} | ${['isString']}
    ${{}}        | ${undefined} | ${undefined} | ${['isString']}
    ${true}      | ${undefined} | ${undefined} | ${['isString']}
    ${undefined} | ${true}      | ${undefined} | ${['isNotEmpty', 'isString']}
    ${undefined} | ${undefined} | ${true}      | ${undefined}
    ${undefined} | ${true}      | ${true}      | ${['isNotEmpty', 'isString', 'isArray']}
    ${'some'}    | ${true}      | ${true}      | ${['isArray']}
    ${['some']}  | ${true}      | ${true}      | ${undefined}
  `(
    'should validate $value and throw errors $errors',
    ({ value, required, isArray, errors }) => {
      testProperty({ type: 'string', required, isArray }, value, errors);
    }
  );
});
