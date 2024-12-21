import { ApiProperty } from '@nestjs/swagger';
import { num, str } from '@rline/type';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

@Exclude()
export class UnsetRelationDto {
  @ApiProperty({ type: 'integer' })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  id = num();

  @ApiProperty({ type: 'string' })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  rn = str();
}

@Exclude()
export class SetRelationDto extends UnsetRelationDto {
  @ApiProperty({ type: 'integer' })
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  rid = num();
}

@Exclude()
export class AddRelationDto extends SetRelationDto {}

@Exclude()
export class RemoveRelationDto extends SetRelationDto {}
