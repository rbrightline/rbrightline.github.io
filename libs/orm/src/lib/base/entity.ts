import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Column } from '../decorators/column';
import { Property } from '@rline/property';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  @Property({ type: 'number', notValidate: true, exclude: true })
  id: number;

  @CreateDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  createdAt: Date;
  @UpdateDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  updatedAt: Date;
  @DeleteDateColumn()
  @Property({ type: 'date', notValidate: true, exclude: true })
  deletedAt: Date;

  @Column({ type: 'boolean', default: true }) active: boolean;
}
