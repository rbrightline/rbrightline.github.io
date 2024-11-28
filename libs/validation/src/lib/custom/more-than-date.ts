import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isDate,
} from 'class-validator';

export const MORE_THAN_DATE_CONSTRAINT_NAME = 'moreThanDate';

/**
 * Validate the property is after the target property's value
 * @param property the target property name
 * @param validationOptions validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function MoreThanDate(
  property: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (object: any, propertyName: any) => {
    registerDecorator({
      name: MORE_THAN_DATE_CONSTRAINT_NAME,
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: {
        ...validationOptions,
        message: `${propertyName} must be after ${property}.`,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            isDate(value) &&
            isDate(relatedValue) &&
            value.getTime() > relatedValue.getTime()
          );
        },
      },
    });
  };
}
