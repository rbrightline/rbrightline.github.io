import {
  ID,
  LoadRelationsQuery,
  type OrderDir,
  SelectFieldsQuery,
  WithDeletedQuery,
} from '@rline/type';
import { OrderQueryDto } from './order';
import { PaginatorQueryDto } from './paginator';
import { Property } from '@rline/property';

export class CommonQueryDto<T extends ID>
  implements
    PaginatorQueryDto,
    OrderQueryDto<T>,
    SelectFieldsQuery<T>,
    LoadRelationsQuery,
    WithDeletedQuery
{
  @Property({ type: 'number', isInt: true, isString: true, default: 20 })
  take: number;
  
  @Property({ type: 'number', isInt: true, isString: true, default: 0 })
  skip: number;

  @Property({ type: 'string', default: 'id' })
  orderBy: keyof T;

  @Property({
    type: 'string',
    isIn: ['ASC', 'DESC', 'asc', 'desc'],
    default: 'ASC',
  })
  orderDir: OrderDir;

  @Property({ type: 'array', items: { type: 'string' }, minItems: 2 })
  select: (keyof T)[];

  @Property({ type: 'boolean', isString: true })
  loadEagerRelations: boolean;

  @Property({ type: 'boolean', isString: true })
  loadRelationIds: boolean;

  @Property({ type: 'boolean', isString: true, default: false })
  withDeleted: boolean;
}
