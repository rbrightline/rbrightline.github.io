export type LoadRelationsQuery = {
  /**
   * By default eager relations are loaded.
   * If false, the eager relations are NOT loaded
   */
  loadEagerRelations: boolean;

  /**
   * If true, the relation ids are loaded
   */
  loadRelationIds: boolean;
};
