import { Param, ParseIntPipe } from '@nestjs/common';

export function IDParam(): ParameterDecorator {
  return (t, p, d) => {
    Param('id', ParseIntPipe)(t, p, d);
  };
}
