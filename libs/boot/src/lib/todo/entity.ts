import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty() @PrimaryGeneratedColumn() id = -1;

  @ApiProperty() @Column({ type: 'varchar', unique: true }) title =
    'Todo title';
  @ApiProperty() @Column({ type: 'varchar', nullable: true }) description =
    'Todo description';
  @ApiProperty() @Column({ type: 'integer', default: -1 }) issueReference = -1;
}
