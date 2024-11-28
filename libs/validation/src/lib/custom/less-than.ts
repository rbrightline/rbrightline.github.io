import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export const LESS_THAN_CONSTRAINT_NAME = 'lessThan';
/**
 * Validate the property is less than the target property's value
 * @param property the target property name
 * @param validationOptions validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function LessThan(
  property: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (object: any, propertyName: any) => {
    registerDecorator({
      name: LESS_THAN_CONSTRAINT_NAME,
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: {
        ...validationOptions,
        message: `${propertyName} must be less than ${property}.`,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            typeof value === 'number' &&
            typeof relatedValue === 'number' &&
            value < relatedValue
          );
        },
      },
    });
  };
}
