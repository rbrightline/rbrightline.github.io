import { ApiProperty } from '@nestjs/swagger';
import { BaseModelClass, IDModel, num } from '@rline/type';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class IDEntity<T> extends BaseModelClass<T> implements IDModel {
  @ApiProperty({ type: 'number', required: true })
  @Expose()
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @PrimaryGeneratedColumn()
  id = num();
}

export abstract class IDQuery<T> extends BaseModelClass<T> {}
