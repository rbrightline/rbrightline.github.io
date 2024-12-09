import { Dto, Property } from '@rline/property';
import { AddRelation } from '@rline/type';

@Dto()
export class UnsetRelationDto {
  @Property({ type: 'number', required: true, isString: true }) id: number;
  @Property({ type: 'string', required: true }) rn: string;
}

@Dto()
export class AddRelationDto extends UnsetRelationDto implements AddRelation {
  @Property({ type: 'number', required: true, isString: true }) rid: number;
}

@Dto()
export class RemoveRelationDto extends AddRelationDto {}

@Dto()
export class SetRelationDto extends AddRelationDto {}
