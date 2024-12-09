import { Dto, Property } from '@rline/property';
import { ID, type OrderDir, OrderQuery } from '@rline/type';

@Dto()
export class OrderQueryDto<T extends ID> implements OrderQuery<T> {
  @Property({ type: 'string', default: 'id' }) orderBy: keyof T;
  @Property({ type: 'string', default: 'ASC' }) orderDir: OrderDir;
}
