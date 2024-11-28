import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { MoreThan } from './more-than';

describe('MoreThan', () => {
  it.each`
    first | second
    ${3}  | ${1}
    ${5}  | ${2}
    ${7}  | ${3}
    ${7}  | ${-100}
  `('should validate', ({ first, second }) => {
    class Sample {
      @MoreThan('second')
      first: number;
      second: number;
    }

    const instance = plainToInstance(Sample, { first, second });
    const errors = validateSync(instance);
    expect(errors.length).toBe(0);
  });

  it.each`
    first   | second
    ${1}    | ${3}
    ${2}    | ${5}
    ${3}    | ${7}
    ${-100} | ${7}
  `('should NOT validate', ({ first, second }) => {
    class Sample {
      @MoreThan('second')
      first: number;
      second: number;
    }

    const instance = plainToInstance(Sample, { first, second });
    const errors = validateSync(instance);
    expect(errors[0].constraints?.moreThan).toBeTruthy();
  });
});
