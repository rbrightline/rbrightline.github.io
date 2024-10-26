import { SecurityPropertyOptions } from './security';
import { Clickable } from './clickable';
import { ValidationPropertyOptions } from './validation';

export type __CommonPropertyOptions = {
  description: string;
  descriptions: string;
};
export type CommonPropertyOptions =
  | ValidationPropertyOptions
  | Clickable
  | SecurityPropertyOptions;
