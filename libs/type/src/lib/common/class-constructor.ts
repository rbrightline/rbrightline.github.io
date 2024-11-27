/**
 * Helper type for `class-type` parameters
 *
 * ````typescript
 * const value:ClassConstructor<SampleClass> = {
 *  sampleProperty = 'sample property value'
 * }
 * ````
 */
export type ClassConstructor<T = unknown> = {
  new (...args: unknown[]): T;
};
