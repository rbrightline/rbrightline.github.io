import { ID } from '@rline/type';

export type AttributeModel = {
  key: string;
  value: string;
};

export type AttributeEntity = AttributeModel & ID;

export type CreateAttributeModel = AttributeModel;

export type UdpateAttributeModel = CreateAttributeModel;

export type QueryAttributeModel<T> = Record<keyof AttributeModel, T>;
