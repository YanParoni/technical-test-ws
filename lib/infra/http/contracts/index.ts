export interface IHttpClient {
  get: <T>(callback: (...args: any[]) => Promise<T>) => Promise<T>;
  post: <T>(callback: (...args: any[]) => Promise<T>) => Promise<T>;
  put: <T>(callback: (...args: any[]) => Promise<T>) => Promise<T>;
  patch: <T>(callback: (...args: any[]) => Promise<T>) => Promise<T>;
  delete: <T>(callback: (...args: any[]) => Promise<T>) => Promise<T>;
}


export namespace HttpClientDTO {
  export type Input= {
    (): <T>(callback: (...args: any[]) => T) => Promise<T>
  }

  export type Output = {data?:any}}
