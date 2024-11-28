import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { MetadataTokens } from './tokens';

/**
 * Define a resource such that only allowed by the users having the role.
 * @param role user role such as Admin, Editor.
 * @returns method or class level decorator {@link CustomDecorator}
 */
export function RequiredRole(role: string): CustomDecorator {
  return ((t: any, p?: any, d?: any) => {
    SetMetadata(MetadataTokens.ROLE, role)(t, p, d);
  }) as unknown as CustomDecorator;
}
