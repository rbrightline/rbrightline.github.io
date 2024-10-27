import { Entity as __Entity, Unique as __Unique } from 'typeorm';
import { Dto } from '@rline/property';

export function Entity(uniqueFiels?: string[]): ClassDecorator {
  return (t) => {
    __Entity()(t);
    __Unique(uniqueFiels || [])(t);
    Dto()(t);
  };
}
