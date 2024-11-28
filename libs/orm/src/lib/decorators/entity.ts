import { Entity as E } from 'typeorm';

export function Entity(): ClassDecorator {
  return (t) => {
    E()(t);
  };
}
