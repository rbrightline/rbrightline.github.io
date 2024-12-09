import {
  CreateDateColumn,
  DeleteDateColumn,
  FindOperator,
  UpdateDateColumn,
} from 'typeorm';
import { IDEntity, IDView } from './id';
import { Dto, Property } from '@rline/property';
import { ViewColumn } from '../decorators/view-column';
import { QueryDto } from '../type/query-dto';
import { Timestamps } from '@rline/type';
import { QueryProperty } from '../decorators/query';

export class TimestampsEntity extends IDEntity implements Timestamps {
  @CreateDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  createdAt: Date;

  @UpdateDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  updatedAt: Date;

  @DeleteDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  deletedAt: Date;
}

export class TimestampsView extends IDView {
  @ViewColumn({ type: 'date' }) createdAt: Date;

  @ViewColumn({ type: 'date' }) updatedAt: Date;

  @ViewColumn({ type: 'date' }) deletedAt: Date;
}

@Dto()
export class QueryTimestampDto implements QueryDto<Timestamps> {
  @QueryProperty({ type: 'date' }) createdAt: FindOperator<Timestamps>;
  @QueryProperty({ type: 'date' }) updatedAt: FindOperator<Timestamps>;
  @QueryProperty({ type: 'date' }) deletedAt: FindOperator<Timestamps>;
}
