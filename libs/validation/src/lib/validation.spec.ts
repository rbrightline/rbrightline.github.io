import 'reflect-metadata';
import { Exclude, plainToInstance } from 'class-transformer';
import { Validation } from './validation';
import { validateSync } from 'class-validator';
import { ValidationOptions } from '@rline/type';

function validationTestHelper(
  options: ValidationOptions,
  value: any,
  errors: string[]
) {
  @Exclude()
  class Sample {
    @Validation({ ...options })
    value: string;
  }

  const foundErrors = validateSync(plainToInstance(Sample, { value }));

  if (errors) {
    expect(Object.keys(foundErrors[0].constraints || {}).length).toBe(
      errors.length
    );

    for (const error of errors) {
      expect(
        foundErrors.find((e) =>
          Object.keys(e.constraints || {}).find((k) => k == error)
        )
      ).toBeTruthy();
    }
  } else {
    expect(foundErrors.length).toBe(0);
  }
}

describe('Validation', () => {
  describe('StringValidation', () => {
    it.each`
      options                                           | value        | errors
      ${undefined}                                      | ${undefined} | ${undefined}
      ${{ required: true }}                             | ${undefined} | ${['isString', 'isNotEmpty']}
      ${{ required: true, minLength: 3 }}               | ${undefined} | ${['isString', 'isNotEmpty', 'minLength']}
      ${{ required: true, minLength: 3, maxLength: 5 }} | ${undefined} | ${['isString', 'isNotEmpty', 'minLength', 'maxLength']}
      ${{ required: true, minLength: 2, maxLength: 4 }} | ${'so'}      | ${undefined}
      ${{ required: true, minLength: 2, maxLength: 4 }} | ${'soso'}    | ${undefined}
    `(
      '[ String ] should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        validationTestHelper({ ...options, type: 'string' }, value, errors);
      }
    );
  });

  describe('NumberValidation', () => {
    it.each`
      options                                       | value        | errors
      ${undefined}                                  | ${undefined} | ${undefined}
      ${{ required: true }}                         | ${undefined} | ${['isNumber', 'isNotEmpty']}
      ${{ required: true, minimum: 3 }}             | ${undefined} | ${['isNumber', 'isNotEmpty', 'min']}
      ${{ required: true, minimum: 3, maximum: 5 }} | ${undefined} | ${['isNumber', 'isNotEmpty', 'min', 'max']}
      ${{ required: true, minimum: 2, maximum: 4 }} | ${2}         | ${undefined}
      ${{ required: true, minimum: 2, maximum: 4 }} | ${4}         | ${undefined}
    `(
      '[ Number ] should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        validationTestHelper({ ...options, type: 'number' }, value, errors);
      }
    );
  });

  describe('BooleanValidation', () => {
    it.each`
      options               | value        | errors
      ${undefined}          | ${undefined} | ${undefined}
      ${{ required: true }} | ${undefined} | ${['isBoolean', 'isNotEmpty']}
    `(
      '[ Boolean ] should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        validationTestHelper({ ...options, type: 'boolean' }, value, errors);
      }
    );
  });

  describe('DateValidation', () => {
    it.each`
      options               | value        | errors
      ${undefined}          | ${undefined} | ${undefined}
      ${{ required: true }} | ${undefined} | ${['isDate', 'isNotEmpty']}
    `(
      '[ Boolean ] should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        validationTestHelper({ ...options, type: 'date' }, value, errors);
      }
    );
  });

  describe('ObjectValidation', () => {
    it.each`
      options               | value        | errors
      ${undefined}          | ${undefined} | ${undefined}
      ${{ required: true }} | ${undefined} | ${['isObject', 'isNotEmpty']}
    `(
      '[ Boolean ] should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        class TargetClass {
          @Validation({ type: 'string' }) name: string;
        }
        validationTestHelper(
          { ...options, type: 'object', target: () => TargetClass },
          value,
          errors
        );
      }
    );
  });
});
