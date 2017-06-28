export interface IOK<T> {
    ok: true;
    data: T;
}
export interface IError {
    ok: false;
    error: string;
}
export declare type IResult<T> = IOK<T> | IError;
export declare const Result: {
    OK<T>(data: T): IOK<T>;
    Error(error: string): IError;
    of<T>(fn: () => T): IResult<T>;
    promise<T>(fn: () => Promise<T>): Promise<IResult<T>>;
};
