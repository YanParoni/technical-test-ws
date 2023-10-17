import 'reflect-metadata'
import { Container } from 'inversify'
import { MockedHttpClient } from '@/infra/http'
import { IHttpClient } from '@/infra/http/contracts'
import { IProductsGateway } from '@/infra/gateways/contracts/Products'
import {ProductsGateway} from '@/infra/gateways/Products'

const iocContainer = new Container({ defaultScope: 'Singleton' })

iocContainer.bind<IHttpClient>('MockedHttpClient').to(MockedHttpClient);
iocContainer.bind<IProductsGateway>('ProductsGateway').to(ProductsGateway)

export { iocContainer }
