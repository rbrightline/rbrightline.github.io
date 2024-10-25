export type ClassConstructor<T> = {
  new (...args: any[]): T;
};

/**
 * Represents some Type of the Object.
 */
export type ObjectType<T> =
  | {
      new (): T;
    }
  | Function;
