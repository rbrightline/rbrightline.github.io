import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { FutureDate } from './future-date';

describe('FutureDate', () => {
  it('should validate', () => {
    class Sample {
      @FutureDate() value: Date;
    }

    const dateValue = new Date();

    dateValue.setDate(dateValue.getDate() + 2);
    const instance = plainToInstance(Sample, { value: dateValue });
    const errors = validateSync(instance);
    expect(errors.length).toBe(0);
  });

  it('should NOT validate', () => {
    class Sample {
      @FutureDate() value: number;
    }

    const dateValue = new Date();

    dateValue.setDate(dateValue.getDate() - 2);
    const instance = plainToInstance(Sample, { value: dateValue });
    const errors = validateSync(instance);
    expect(errors[0].constraints?.futureDate).toBeTruthy();
  });
});
