import { testProperty } from './utils.spec';
import 'reflect-metadata';

describe('ObjectValidation', () => {
  it.each`
    value                     | required     | isArray      | errors
    ${{ value: undefined }}   | ${undefined} | ${undefined} | ${undefined}
    ${{ value: undefined }}   | ${undefined} | ${undefined} | ${undefined}
    ${{ value: undefined }}   | ${undefined} | ${undefined} | ${undefined}
    ${[{ value: undefined }]} | ${true}      | ${true}      | ${undefined}
    ${undefined}              | ${true}      | ${undefined} | ${['isNotEmpty', 'isObject']}
    ${undefined}              | ${true}      | ${true}      | ${['isNotEmpty', 'isObject', 'isArray']}
    ${{ value: undefined }}   | ${true}      | ${true}      | ${['isArray']}
    ${1}                      | ${true}      | ${undefined} | ${['isObject', 'nestedValidation']}
    ${true}                   | ${true}      | ${undefined} | ${['isObject', 'nestedValidation']}
    ${false}                  | ${true}      | ${undefined} | ${['isObject', 'nestedValidation']}
    ${'some'}                 | ${true}      | ${undefined} | ${['isObject', 'nestedValidation']}
  `(
    'should validate $value and throw errors $errors',
    ({ value, required, isArray, errors }) => {
      testProperty(
        {
          type: 'object',
          target: () =>
            class A {
              value: any;
            },
          required,
          isArray,
        },
        value,
        errors
      );
    }
  );
});
