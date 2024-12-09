import { Dto, Property } from '@rline/property';
import { WithDeletedQuery } from '@rline/type';

@Dto()
export class WithDeletedDto implements WithDeletedQuery {
  @Property({ type: 'boolean', isString: true }) withDeleted: boolean;
}
