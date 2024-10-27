/**
 * owner
 * - messages' sendBy
 * - messages' receivedBy
 * - skus' product
 * - prices' sku
 *
 */

export type RelationType =
  | 'many-to-many'
  | 'many-to-one'
  | 'one-to-many'
  | 'one-to-one';

/**
 * ON_DELETE type to be used to specify delete strategy when some relation is being deleted from the database.
 */
export type OnDeleteType =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';

export type CascadeType =
  | boolean
  | ('insert' | 'update' | 'remove' | 'soft-remove' | 'recover')[];
