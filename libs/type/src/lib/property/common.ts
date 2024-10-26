import { PropertyType } from './property-type';
import { UIPropertyOptions } from './ui';
import { ValidationPropertyOptions } from './validation';

export type __CommonPropertyOptions = {
  name: string;
  type: PropertyType;
  description: string;
  descriptions: string;
};

export type CommonPropertyOptions = __CommonPropertyOptions &
  ValidationPropertyOptions &
  UIPropertyOptions;
