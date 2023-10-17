import { injectable } from 'inversify';
import { HttpClientDTO, IHttpClient } from './contracts';

@injectable()
export class MockedHttpClient implements IHttpClient {
  constructor() {}

  private async handleRequest<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      setTimeout(async () => {
        try {
          const result = await callback();
          resolve(result);
        } catch (error: any) {
          console.error(error.message);
          reject(error);
        }
      }, 1000);
    });
  }

  async get<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
    return this.handleRequest(callback);
  }

  async post<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
    return this.handleRequest(callback);
  }

  async put<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
    return  this.handleRequest(callback);
  }

  async patch<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
   return this.handleRequest(callback);
  }

  async delete<T>(callback: (...args: any[]) => Promise<T>): Promise<T> {
    return this.handleRequest(callback);
  }
}
