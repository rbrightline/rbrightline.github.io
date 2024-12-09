import { Entity as E, EntityOptions as EO, Unique } from 'typeorm';

export type EntityOptions<T> = EO & {
  uniques?: (keyof T)[];
};

export function Entity<T>(options: EntityOptions<T> = {}): ClassDecorator {
  return (t) => {
    const { uniques, ...rest } = options;

    if (uniques) Unique(uniques as string[])(t);

    E(rest)(t);
  };
}
