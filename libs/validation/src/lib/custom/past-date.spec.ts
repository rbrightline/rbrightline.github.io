import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { PastDate } from './past-date';

describe('PastDate', () => {
  it('should validate', () => {
    class Sample {
      @PastDate() value: Date;
    }

    const pastDateValue = new Date();

    pastDateValue.setDate(pastDateValue.getDate() - 2);
    const instance = plainToInstance(Sample, { value: pastDateValue });
    const errors = validateSync(instance);
    expect(errors.length).toBe(0);
  });

  it('should NOT validate', () => {
    class Sample {
      @PastDate() value: number;
    }

    const futureDateValue = new Date();

    futureDateValue.setDate(futureDateValue.getDate() + 2);
    const instance = plainToInstance(Sample, { value: futureDateValue });
    const errors = validateSync(instance);
    expect(errors[0].constraints?.pastDate).toBeTruthy();
  });
});
