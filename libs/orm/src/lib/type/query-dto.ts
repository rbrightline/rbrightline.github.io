import { FindOperator } from 'typeorm';

export type QueryDto<T = any> = Record<keyof T, FindOperator<any>>;
