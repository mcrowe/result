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
};
