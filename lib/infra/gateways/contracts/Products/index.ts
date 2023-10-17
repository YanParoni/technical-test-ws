export interface IProductsGateway {
  getProducts: (callback: () => Promise<any>) => Promise<any>;
  addProduct: (callback: (...args: any[]) => Promise<any>) => Promise<any>;
  editProduct: (callback: (...args: any[]) => Promise<any>) => Promise<any>;
  removeProduct: (callback: (...args: any[]) => Promise<any>) => Promise<any>;
}
