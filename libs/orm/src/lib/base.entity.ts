import { Property } from '@rline/property';
import { Active, ID, Timestamp } from '@rline/type';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity implements Timestamp<Date>, ID, Active {
  @Property({
    type: 'number',
    isInt: true,
    description: 'Entity primary id',
    example: 1,
    
  })
  @PrimaryGeneratedColumn()
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  active: boolean;
}
