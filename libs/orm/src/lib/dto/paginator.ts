import { Dto, Property } from '@rline/property';
import { PaginatorQuery } from '@rline/type';

@Dto()
export class PaginatorQueryDto implements PaginatorQuery {
  @Property({
    type: 'number',
    isString: true,
    isInt: true,
    default: 20,
    maximum: 1000,
  })
  take: number;
  
  @Property({ type: 'number', isString: true, isInt: true, default: 0 })
  skip: number;
}
