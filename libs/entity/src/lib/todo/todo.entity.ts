import { BaseEntity, Column, Entity } from '@rline/orm';
import { TodoModel } from '@rline/model';
@Entity()
export class Todo extends BaseEntity implements TodoModel {
  @Column({ type: 'string', required: true, minLength: 3, maxLength: 100 })
  title: string;

  @Column({ type: 'string', required: true, minLength: 3, maxLength: 1000 })
  description: string;

  @Column({ type: 'string', required: true, unique: true, format: 'short' })
  name: string;
}
