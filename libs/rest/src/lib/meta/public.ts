import { SetMetadata } from '@nestjs/common';
import { MetadataTokens } from './tokens';

/**
 * Define public resource which does not require any means of authentication.
 * @returns method decorator {@link MethodDecorator}
 */
export function Public(): MethodDecorator {
  return (t, p, d) => {
    SetMetadata(MetadataTokens.PUBLIC, true)(t, p, d);
  };
}
