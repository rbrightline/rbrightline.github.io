import { Model } from '@rline/type';

export type TodoModel = Model<{
  title: string;
  description: string;
}>;
