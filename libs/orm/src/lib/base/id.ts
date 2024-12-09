import { FindOperator, PrimaryGeneratedColumn } from 'typeorm';
import { ViewColumn } from '../decorators/view-column';
import { ID } from '@rline/type';
import { QueryDto } from '../type/query-dto';
import { Dto } from '@rline/property';
import { QueryProperty } from '../decorators/query';

export class IDEntity {
  @PrimaryGeneratedColumn()
  id: number;
}

export class IDView {
  @ViewColumn({ type: 'number' }) id: number;
}

@Dto()
export class QueryIDDto implements QueryDto<ID> {
  @QueryProperty({ type: 'number' }) id: FindOperator<number>;
}
