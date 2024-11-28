import { RequiredRole } from './role';

/**
 * Define a resource such that only allowed by the admin users.
 * @returns method or class level decorator {@link CustomDecorator}
 */
export function Admin(): MethodDecorator {
  return (t, p, d) => {
    RequiredRole('Admin')(t, p, d);
  };
}
