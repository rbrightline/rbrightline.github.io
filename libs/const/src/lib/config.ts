export enum ServerConfigKeys {
  PORT = 'PORT',
  TITLE = 'TITLE',
  DESCRIPTION = 'DESCRIPTION',
  PREFIX = 'PREFIX',
}

export enum DatabaseConfigKeys {
  DATABASE_TYPE = 'DATABASE_TYPE',
  DATABASE_NAME = 'DATABASE_NAME',
  DATABASE_USERNAME = 'DATABASE_USERNAME',
  DATABASE_PASSWORD = 'DATABASE_PASSWORD',
}

export enum JwtConfigKeys {
  SECRET = 'SECRET',
  EXPIRES = 'EXPIRES',
}

/**
 * Convert the regular configuraiton key into prefixed-profile configuration key
 * if profiel is not undefined
 */
export function toProfileConfigKey(
  profile: string,
  configKey: ServerConfigKeys | DatabaseConfigKeys
) {
  if (profile) return `${profile}_${configKey}`;

  return configKey;
}
