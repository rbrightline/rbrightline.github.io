import { PropertyType } from './property-type';
import { PropertyRelationOptions } from './relation';
import { UIPropertyOptions } from './ui';
import { ValidationPropertyOptions } from './validation';

export type __CommonPropertyOptions = {
  name: string;
  type: PropertyType;
  description: string;
  descriptions: string;
  example: any;
  examples: any;
  defaultValue: any;
};

export type CommonPropertyOptions = __CommonPropertyOptions &
  ValidationPropertyOptions &
  UIPropertyOptions &
  PropertyRelationOptions;
