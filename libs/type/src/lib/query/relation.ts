export type AddRelation = {
  id: number;
  rn: string;
  rid: number;
};

export type RemoveRelation = AddRelation;

export type SetRelation = AddRelation;

export type UnsetRelation = Omit<AddRelation, 'rid'>;
