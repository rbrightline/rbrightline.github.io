import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '@rline/db';
import { date, str } from '@rline/type';
import { Expose } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity()
export class Sample extends BaseEntity<Sample> {
  @Column({ type: 'varchar', nullable: true })
  name = str();

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @Expose()
  @Column({ type: 'timestamp', nullable: true })
  other = date();
}
