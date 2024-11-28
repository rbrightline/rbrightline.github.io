import { ViewColumn } from '../decorators/view-column';

export class BaseView {
  @ViewColumn({ type: 'number' }) id: number;

  @ViewColumn({ type: 'date' }) createdAt: Date;

  @ViewColumn({ type: 'date' }) updatedAt: Date;

  @ViewColumn({ type: 'date' }) deletedAt: Date;

  @ViewColumn({ type: 'boolean' }) active: boolean;
}
