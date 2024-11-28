import { ViewEntity as VE } from 'typeorm';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions.js';

export function ViewEntity(options: ViewEntityOptions): ClassDecorator {
  return (t) => {
    VE(options)(t);
  };
}
