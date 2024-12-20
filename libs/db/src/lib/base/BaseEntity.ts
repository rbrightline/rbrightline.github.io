import { ApiProperty } from '@nestjs/swagger';
import { BaseModel, num, str } from '@rline/type';
import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { ActiveEntity } from './ActiveEntity';

export class BaseEntity<T> extends ActiveEntity<T> implements BaseModel {
  @ApiProperty({ type: 'string', required: false, nullable: true })
  @Expose()
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  info = str();

  @ApiProperty({ type: 'integer', required: false, nullable: true })
  @Expose()
  @IsNumber()
  @IsOptional()
  @Column({ type: 'integer', nullable: true })
  updatedBy = num();
}
