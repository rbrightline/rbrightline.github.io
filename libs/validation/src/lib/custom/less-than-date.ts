import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isDate,
} from 'class-validator';

export const LESS_THAN_DATE_CONSTRAINT_NAME = 'lessThanDate';

/**
 * Validate the property is before the target property's value
 * @param property the target property name
 * @param validationOptions validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function LessThanDate(
  property: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (object: any, propertyName: any) => {
    registerDecorator({
      name: LESS_THAN_DATE_CONSTRAINT_NAME,
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: {
        ...validationOptions,
        message: `${propertyName} must be before ${property}.`,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            isDate(value) &&
            isDate(relatedValue) &&
            value.getTime() < relatedValue.getTime()
          );
        },
      },
    });
  };
}
