export type AddRelation = {
  /**
   * Entity id
   */
  id: number;
  /**
   * Relation name
   */
  rn: string;

  /**
   * Relation id
   */
  rid: number;
};

export type RemoveRelation = AddRelation;

export type SetRelation = AddRelation;

export type UnsetRelation = Omit<AddRelation, 'rid'>;
