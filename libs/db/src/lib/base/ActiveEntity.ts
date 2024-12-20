import { ApiProperty } from '@nestjs/swagger';
import { ActiveModel, bool } from '@rline/type';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { Column } from 'typeorm';
import { TimestampEntity } from './TimestampEntity';

export class ActiveEntity<T> extends TimestampEntity<T> implements ActiveModel {
  @ApiProperty({ type: 'boolean', required: false, nullable: true })
  @Expose()
  @IsBoolean()
  @IsOptional()
  @Column({ type: 'boolean', nullable: true })
  active = bool();
}
