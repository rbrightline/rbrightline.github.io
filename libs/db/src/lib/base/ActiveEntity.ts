import { ApiProperty } from '@nestjs/swagger';
import { bool } from '@rline/type';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { Column } from 'typeorm';
import { TimestampEntity } from './TimestampEntity';

export abstract class ActiveEntity<T> extends TimestampEntity<T> {
  @ApiProperty({ type: 'boolean', required: false, nullable: true })
  @Expose()
  @IsBoolean()
  @IsOptional()
  @Column({ type: 'boolean', nullable: true })
  active = bool();
}
