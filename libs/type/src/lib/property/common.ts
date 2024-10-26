import { UIPropertyOptions } from './ui';
import { ValidationPropertyOptions } from './validation';

export type __CommonPropertyOptions = {
  description: string;
  descriptions: string;
};
export type CommonPropertyOptions =
  | __CommonPropertyOptions
  | ValidationPropertyOptions
  | UIPropertyOptions;
