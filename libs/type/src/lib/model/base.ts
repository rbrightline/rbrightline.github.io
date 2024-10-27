export type ID = {
  id: number;
};

export type Timestamp<T = Date> = {
  createdAt: T;
  updatedAt: T;
  deletedAt: T;
};

export type Active = {
  active: boolean;
};

export type Owner = {
  owner: boolean;
};

export type Attribute = {
  key: string;
  value: string;
};

export type Model<T> = T & Partial<Timestamp & ID> & Active;
