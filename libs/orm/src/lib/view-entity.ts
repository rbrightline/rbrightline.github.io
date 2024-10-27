import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions.js';
import { ViewEntity as __ViewEntity } from 'typeorm';
import { Dto } from '@rline/property';

export function ViewEntity(options: ViewEntityOptions): ClassDecorator {
  return (t) => {
    __ViewEntity(options)(t);
    Dto()(t);
  };
}
