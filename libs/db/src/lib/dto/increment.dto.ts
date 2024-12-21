import { ApiProperty } from '@nestjs/swagger';
import { num, str } from '@rline/type';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class IncrementDto {
  @ApiProperty({ type: 'string' })
  @Expose()
  @IsNotEmpty()
  @IsString()
  property = str();

  @ApiProperty({ type: 'string' })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  value = num();
}

@Exclude()
export class DecrementDto extends IncrementDto {}
