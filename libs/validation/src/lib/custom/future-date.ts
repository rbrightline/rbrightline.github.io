import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isDate,
} from 'class-validator';

export const FUTURE_DATE_CONSTRAINT_NAME = 'futureDate';

/**
 * Validate the property is after the target property's value
 * @param property the target property name
 * @param validationOptions validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function FutureDate(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (object: any, propertyName: any) => {
    registerDecorator({
      name: FUTURE_DATE_CONSTRAINT_NAME,
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: `${propertyName} must be a future date.`,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isDate(value) && value.getTime() > Date.now();
        },
      },
    });
  };
}
