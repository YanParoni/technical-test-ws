import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../../http/contracts';
import { IProductsGateway } from '../contracts/Products';

const BASE_URL  = 'api/proxy'
interface IRequestParams {
  url: string;
}

@injectable()
export class ProductsGateway implements IProductsGateway  {
  constructor(
    @inject('MockedHttpClient') private readonly fetchHttpClient: IHttpClient,  ) {
  }

  async getProducts(callback: () => Promise<any>): Promise<any> {
    const response = await this.fetchHttpClient.get(callback)
    return response
  }

  async addProduct(callback: (...args: any[]) => Promise<any>): Promise<void>{
    await this.fetchHttpClient.post(callback)
  }

 async editProduct(callback: (...args: any[]) => Promise<any>): Promise<any>{
  await this.fetchHttpClient.put(callback)
 };

  async removeProduct(callback: (...args: any[]) => Promise<any>):Promise<any>{
    await this.fetchHttpClient.delete(callback)
  };
}