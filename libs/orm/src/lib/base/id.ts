import { PrimaryGeneratedColumn } from 'typeorm';
import { ViewColumn } from '../decorators/view-column';

export class IDEntity {
  @PrimaryGeneratedColumn()
  id: number;
}

export class IDView {
  @ViewColumn({ type: 'number' }) id: number;
}
