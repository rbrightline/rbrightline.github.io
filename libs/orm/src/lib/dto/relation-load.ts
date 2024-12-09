import { Dto, Property } from '@rline/property';
import { LoadRelationsQuery } from '@rline/type';

@Dto()
export class LoadRelationQueryDto implements LoadRelationsQuery {
  @Property({ type: 'boolean', isString: true }) loadEagerRelations: boolean;
  @Property({ type: 'boolean', isString: true }) loadRelationIds: boolean;
}
