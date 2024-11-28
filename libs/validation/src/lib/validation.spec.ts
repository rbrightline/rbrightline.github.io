import { Exclude, plainToInstance } from 'class-transformer';
import { Validation } from './validation';
import { validateSync } from 'class-validator';

describe('Valiation', () => {
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
      'should validate $value with $options and throw $errors',
      ({ options, value, errors }) => {
        @Exclude()
        class Sample {
          @Validation({ ...options, type: 'string' })
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
    );
  });
});
