import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '@rline/db';
import { str } from '@rline/type';
import { Column, Entity } from 'typeorm';

@Entity()
export class Sample extends BaseEntity<Sample> {
  @ApiProperty({ type: 'string', required: false, nullable: true })
  @Column({ type: 'varchar', nullable: true })
  name = str();
}
