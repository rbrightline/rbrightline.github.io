import { testProperty } from './test-utils.spec';

describe('NumberValidation', () => {
  it.each`
    value        | required     | isArray      | errors
    ${undefined} | ${undefined} | ${undefined} | ${undefined}
    ${1}         | ${undefined} | ${undefined} | ${undefined}
    ${-1}        | ${undefined} | ${undefined} | ${undefined}
    ${'1'}       | ${undefined} | ${undefined} | ${['isNumber']}
    ${{}}        | ${undefined} | ${undefined} | ${['isNumber']}
    ${true}      | ${undefined} | ${undefined} | ${['isNumber']}
    ${undefined} | ${true}      | ${undefined} | ${['isNotEmpty', 'isNumber']}
    ${undefined} | ${undefined} | ${true}      | ${undefined}
    ${undefined} | ${true}      | ${true}      | ${['isNotEmpty', 'isNumber', 'isArray']}
    ${1}         | ${true}      | ${true}      | ${['isArray']}
    ${[1]}       | ${true}      | ${true}      | ${undefined}
  `(
    'should validate $value and throw errors $errors',
    ({ value, required, isArray, errors }) => {
      testProperty({ type: 'number', required, isArray }, value, errors);
    }
  );
});
