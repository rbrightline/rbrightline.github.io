import { StringFormat, StringValidationOptions } from '@rline/type';
import {
  IsEAN,
  IsEmail,
  IsIn,
  IsIP,
  IsJWT,
  IsNotIn,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
  ValidationOptions,
} from 'class-validator';

/**
 * @internal this is a helper decorator to create the validation decorator.
 * @param options string validation options {@link StringValidationOptions}
 * @param vo validation options {@link ValidationOptions}
 * @returns property decorator {@link PropertyDecorator}
 */
export function StringFormatValidation(
  format: StringFormat,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    switch (format) {
      case StringFormat.EAN:
        IsEAN(vo)(t, p);
        break;
      case StringFormat.EMAIL:
        IsEmail({}, vo)(t, p);
        break;
      case StringFormat.IP4:
        IsIP('4', vo)(t, p);
        break;
      case StringFormat.IP6:
        IsIP('6', vo)(t, p);
        break;
      case StringFormat.JWT:
        IsJWT(vo)(t, p);
        break;
      case StringFormat.PASSWORD:
        IsStrongPassword({}, vo)(t, p);
        break;
      case StringFormat.PHONE:
        IsPhoneNumber(undefined, vo)(t, p);
        break;
      case StringFormat.UUID:
        IsUUID('4', vo)(t, p);
        break;
    }
  };
}

/**
 * String validation decorator
 * @param options {@link StringValidationOptions }
 * @param vo {@link ValidationOptions}
 * @returns {@link PropertyDecorator}
 */
export function StringValidation(
  options: Partial<StringValidationOptions>,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsString(vo)(t, p);

    const { minLength, maxLength, format, isIn, isNotIn, pattern } = options;

    if (minLength != undefined) MinLength(minLength, vo)(t, p);
    if (maxLength != undefined) MaxLength(maxLength, vo)(t, p);
    if (format != undefined) StringFormatValidation(format, vo)(t, p);

    if (isIn != undefined) IsIn(isIn, vo)(t, p);
    if (isNotIn != undefined) IsNotIn(isNotIn, vo)(t, p);
    if (pattern != undefined) Matches(new RegExp(pattern, 'gi'), vo)(t, p);
  };
}
