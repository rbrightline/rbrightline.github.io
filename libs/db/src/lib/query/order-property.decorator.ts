import { ApiProperty } from '@nestjs/swagger';
import { parseOrderString } from '@rline/query';
import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export function OrderProperty(keys: string[]): PropertyDecorator {
  return (t, p) => {
    ApiProperty({ type: 'string', example: 'id:ASC' })(t, p);
    Expose()(t, p);
    IsOptional()(t, p);
    Transform(({ value }) => {
      const orderItem = parseOrderString(value);
      if (orderItem && orderItem.property && orderItem.direction) {
        if (keys.includes(orderItem.property)) {
          return { [orderItem.property]: orderItem.direction };
        }
      }
      return undefined;
    })(t, p);
  };
}
