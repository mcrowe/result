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
  },

  of<T>(fn: () => T): IResult<T> {
    try {
      return Result.OK( fn() )
    } catch (e) {
      return Result.Error(e.message)
    }
  },

  async promise<T>(fn: () => Promise<T>): Promise<IResult<T>> {
    try {
      const res = await fn()
      return Result.OK(res)
    } catch (e) {
      return Result.Error(e.message)
    }
  }

}