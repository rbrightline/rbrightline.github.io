import { Dto, Property } from '@rline/property';
import { ID, SelectFieldsQuery } from '@rline/type';

@Dto()
export class SelectFieldsQueryDto<T extends ID>
  implements SelectFieldsQuery<T>
{
  @Property({
    type: 'array',
    items: { type: 'string', required: true },
    maxItems: 30,
    minItems: 2,
  })
  select: (keyof T)[];
}
