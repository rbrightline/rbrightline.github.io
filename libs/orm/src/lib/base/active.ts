import {
  QueryTimestampDto,
  TimestampsEntity,
  TimestampsView,
} from './timestamps';
import { Column } from '../decorators/column';
import { ViewColumn } from '../decorators/view-column';
import { Dto, Property } from '@rline/property';
import { Active } from '@rline/type';
import { QueryProperty } from '../decorators/query';
import { FindOperator } from 'typeorm';
import { QueryDto } from '../type/query-dto';

export class ActiveEntity extends TimestampsEntity {
  @Column({ type: 'boolean' })
  active: boolean;
}

export class ActiveView extends TimestampsView {
  @ViewColumn({ type: 'boolean' }) active: boolean;
}

@Dto()
export class CreateActiveDto implements Active {
  @Property({ type: 'boolean' }) active: boolean;
}

@Dto()
export class QueryActiveDto
  extends QueryTimestampDto
  implements QueryDto<Active>
{
  @QueryProperty({ type: 'boolean' }) active: FindOperator<Active>;
}
