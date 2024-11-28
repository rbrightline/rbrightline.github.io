import { SetMetadata } from '@nestjs/common';
import { MetadataTokens } from './tokens';

/**
 * Define the resource name that allows to check the user has required resource permissions.
 * @param resourceName
 * @returns class decorators {@link ClassDecorator}
 */
export function ResourceName(resourceName: string): ClassDecorator {
  return (t) => {
    SetMetadata(MetadataTokens.RESOURCE_NAME, resourceName)(t);
  };
}
