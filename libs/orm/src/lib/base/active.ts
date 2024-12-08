import { TimestampsEntity, TimestampsView } from './timestamps';
import { Column } from '../decorators/column';
import { ViewColumn } from '../decorators/view-column';

export class ActiveEntity extends TimestampsEntity {
  @Column({ type: 'boolean' })
  active: boolean;
}

export class ActiveView extends TimestampsView {
  @ViewColumn({ type: 'boolean' }) active: boolean;
}
