/**
 * String formats provided by `class-validator` library.
 */
export enum StringFormat {
  EMAIL = 'email',
  PASSWORD = 'password',
  UUID = 'uuid',
  JWT = 'jwt',
  PHONE = 'phone',
  IP4 = 'ip4',
  IP6 = 'ip6',
  EAN = 'ean',
  CREDIT_CARD = 'credit-card',
}

export type StringFormats =
  | 'email'
  | 'password'
  | 'uuid'
  | 'jwt'
  | 'phone'
  | 'ip4'
  | 'ip6'
  | 'ean'
  | 'credit-card'
  | 'short'
  | 'long';
