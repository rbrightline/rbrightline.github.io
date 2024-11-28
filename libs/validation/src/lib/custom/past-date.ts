import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isDate,
} from 'class-validator';

export const PAST_DATE_CONSTRAINT_NAME = 'pastDate';

/**
 * Validate the property is after the target property's value
 * @param property the target property name
 * @param validationOptions validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function PastDate(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (object: any, propertyName: any) => {
    registerDecorator({
      name: PAST_DATE_CONSTRAINT_NAME,
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: `${propertyName} must be a past date.`,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isDate(value) && value.getTime() < Date.now();
        },
      },
    });
  };
}
