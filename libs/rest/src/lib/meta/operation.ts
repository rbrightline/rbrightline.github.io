import { SetMetadata } from '@nestjs/common';
import { MetadataTokens } from './tokens';

export enum OperationNames {
  /**
   * Requires read operation permission
   */
  READ = 'READ',

  /**
   * Requires write operation permission
   */
  WRITE = 'WRITE',

  /**
   * Requires update operation permission
   */
  UPDATE = 'UPDATE',

  /**
   * Requires deleted operation permission
   */
  DELETED = 'DELETED',

  /**
   * Requires manage operation permission
   */
  MANAGE = 'MANAGE',
}

export function OperationName(operationName: OperationNames): MethodDecorator {
  return (t, p, d) => {
    SetMetadata(MetadataTokens.OPERATION_NAME, operationName)(t, p, d);
  };
}

export function ReadOperation(): MethodDecorator {
  return (t, p, d) => {
    OperationName(OperationNames.READ)(t, p, d);
  };
}
export function WriteOperation(): MethodDecorator {
  return (t, p, d) => {
    OperationName(OperationNames.WRITE)(t, p, d);
  };
}

export function UpdateOperation(): MethodDecorator {
  return (t, p, d) => {
    OperationName(OperationNames.UPDATE)(t, p, d);
  };
}

export function DeletedOperation(): MethodDecorator {
  return (t, p, d) => {
    OperationName(OperationNames.DELETED)(t, p, d);
  };
}

export function ManageOperation(): MethodDecorator {
  return (t, p, d) => {
    OperationName(OperationNames.MANAGE)(t, p, d);
  };
}
