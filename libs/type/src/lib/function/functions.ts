export type RegularHandler = (...args: any[]) => void;
export type AsyncHandler = (...args: any[]) => Promise<void>;
export type Handler = RegularHandler | AsyncHandler;
