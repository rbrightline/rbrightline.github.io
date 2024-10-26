import { testProperty } from './test-utils.spec';

describe('BooleanValidation', () => {
  it.each`
    value        | required     | isArray      | errors
    ${undefined} | ${undefined} | ${undefined} | ${undefined}
    ${undefined} | ${true}      | ${undefined} | ${['isNotEmpty','isBoolean']}
    ${1}         | ${undefined} | ${undefined} | ${['isBoolean']}
    ${'true'}    | ${undefined} | ${undefined} | ${['isBoolean']}
    ${'false'}   | ${undefined} | ${undefined} | ${['isBoolean']}
    ${{}}        | ${undefined} | ${undefined} | ${['isBoolean']}
    ${true}      | ${undefined} | ${undefined} | ${undefined}
    ${false}     | ${undefined} | ${undefined} | ${undefined}
    ${false}     | ${undefined} | ${true}      | ${['isArray']}
  `(
    'should validate $value and throw errors $errors',
    ({ value, required, isArray, errors }) => {
      testProperty({ type: 'boolean', required, isArray }, value, errors);
    }
  );
});
