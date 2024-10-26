import { Exclude } from 'class-transformer';

/**
 * Exclude extra properties from the object value
 * @returns
 */
export function Dto(): ClassDecorator {
  return (t) => {
    Exclude()(t);
  };
}
