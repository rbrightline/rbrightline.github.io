export type RegularHandler<R = void> = (...args: any[]) => R;
export type AsyncHandler<R = void> = (...args: any[]) => Promise<R>;
export type Handler<R = void> = RegularHandler<R> | AsyncHandler<R>;
