import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { MoreThanDate } from './more-than-date';

describe('MoreThanDate', () => {
  it.each`
    first         | second
    ${new Date()} | ${new Date('10/10/1960')}
    ${new Date()} | ${new Date('10/10/1960')}
    ${new Date()} | ${new Date('10/10/1960')}
    ${new Date()} | ${new Date('10/10/1960')}
  `('should validate', ({ first, second }) => {
    class Sample {
      @MoreThanDate('second')
      first: Date;
      second: Date;
    }

    const instance = plainToInstance(Sample, { first, second });
    const errors = validateSync(instance);
    expect(errors.length).toBe(0);
  });

  it.each`
    first                     | second
    ${new Date('10/10/1960')} | ${new Date()}
    ${new Date('10/10/1960')} | ${new Date()}
    ${new Date('10/10/1960')} | ${new Date()}
    ${new Date('10/10/1960')} | ${new Date()}
  `('should NOT validate', ({ first, second }) => {
    class Sample {
      @MoreThanDate('second')
      first: Date;
      second: Date;
    }

    const instance = plainToInstance(Sample, { first, second });
    const errors = validateSync(instance);
    expect(errors[0].constraints?.moreThanDate).toBeTruthy();
  });
});
