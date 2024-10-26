import { PropertyOptions, StringOptions } from '@rline/type';
import {
  Contains,
  IsIn,
  MinLength,
  NotContains,
  ValidationOptions,
  Matches,
  IsEmail,
  MaxLength,
  IsJWT,
  IsStrongPassword,
  IsPhoneNumber,
  IsUUID,
  IsNotIn,
  IsString,
} from 'class-validator';

export function StringValidation(
  options: PropertyOptions & StringOptions,
  vo: ValidationOptions
): PropertyDecorator {
  const {
    minLength,
    maxLength,
    contains,
    startsWith,
    endsWith,
    format,
    forbidden,
    enum: enums,
    notContains,
    notEndsWith,
    notStartsWith,
  } = options;

  return (t, p) => {
    IsString(vo)(t, p);

    if (minLength != undefined) MinLength(minLength, vo)(t, p);
    if (maxLength != undefined) MinLength(maxLength, vo)(t, p);
    if (enums != undefined) IsIn(enums, vo)(t, p);
    if (forbidden != undefined) IsNotIn(forbidden, vo)(t, p);
    if (contains != undefined) Contains(contains, vo)(t, p);
    if (notContains != undefined) NotContains(contains, vo)(t, p);
    if (startsWith != undefined)
      Matches(new RegExp(`^${startsWith}`, 'i'), vo)(t, p);
    if (endsWith != undefined)
      Matches(new RegExp(`${endsWith}$`, 'i'), vo)(t, p);

    if (notStartsWith != undefined)
      Matches(new RegExp(`^(?!${notStartsWith})`, 'i'), vo)(t, p);

    if (notEndsWith != undefined)
      Matches(new RegExp(`(?!${endsWith})$`, 'i'), vo)(t, p);

    if (format) {
      switch (format) {
        case 'email':
          IsEmail({}, vo)(t, p);
          break;
        case 'short':
          MaxLength(100, vo)(t, p);
          break;
        case 'password':
          IsStrongPassword({}, vo)(t, p);
          break;
        case 'phone':
          IsPhoneNumber(undefined, vo)(t, p);
          break;
        case 'uuid':
          IsUUID('4', vo)(t, p);
          break;
        case 'article':
          MaxLength(2000, vo)(t, p);
          break;
        case 'long':
          MaxLength(400, vo)(t, p);
          break;
        case 'jwt':
          IsJWT(vo)(t, p);
          break;
      }
    }
  };
}
