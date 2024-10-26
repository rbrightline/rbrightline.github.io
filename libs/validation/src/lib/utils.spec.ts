import { plainToInstance } from 'class-transformer';
import { PropertyValidation } from './property';
import { validateSync } from 'class-validator';
import { PropertyOptions } from '@rline/type';

export function testProperty(
  options: PropertyOptions,
  value: any,
  errors?: string[]
) {
  class A {
    @PropertyValidation({ ...options })
    value: any;
  }

  const instance = plainToInstance(A, { value });

  const foundErrors = validateSync(instance);

  let errorCount = 0;

  foundErrors.forEach((e) => {
    errorCount += Object.keys(e.constraints || {}).length;
    e.children?.forEach((e) => {
      errorCount += Object.keys(e.constraints || {}).length;
    });
  });

  console.log({ value });
  console.log(foundErrors);

  if (errors) {
    expect(errorCount).toBe(errors.length);

    foundErrors.forEach((e) => {
      const con0 = Object.keys(e.constraints || {}) ?? [];
      const con1 = e.children?.map((e) => e.constraints || {}).flat() ?? [];

      const con2 = [...con0, ...con1];

      con2.forEach((e) => {
        expect(errors).includes(e);
      });
    });
  } else {
    expect(foundErrors.length).toBe(0);
  }
}
