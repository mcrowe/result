export interface IOK<T> {
    ok: true
    data: T
  }

export interface IError {
  ok: false
  error: string
}

export type IResult<T> = IOK<T> | IError

export const Result = {

  OK<T>(data: T): IOK<T> {
    return { ok: true, data }
  },

  Error(error: string): IError {
    return { ok: false, error }
  }

}