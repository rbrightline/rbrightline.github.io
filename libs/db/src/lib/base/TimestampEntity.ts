import { ApiProperty } from '@nestjs/swagger';
import { date, IDModel, TimestampModel } from '@rline/type';
import { Expose } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { IDEntity } from './IDEntity';

export class TimestampEntity<T>
  extends IDEntity<T>
  implements TimestampModel, IDModel
{
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @Expose()
  @IsDate()
  @IsOptional()
  @CreateDateColumn()
  createdAt = date();

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @Expose()
  @IsDate()
  @IsOptional()
  @UpdateDateColumn()
  updatedAt = date();

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @Expose()
  @IsDate()
  @DeleteDateColumn()
  deletedAt = date();
}
