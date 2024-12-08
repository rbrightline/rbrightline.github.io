import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { IDEntity, IDView } from './id';
import { Property } from '@rline/property';
import { ViewColumn } from '../decorators/view-column';

export class TimestampsEntity extends IDEntity {
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
