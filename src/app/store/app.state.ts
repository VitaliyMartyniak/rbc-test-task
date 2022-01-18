import {Product} from "../interfaces/products";

export interface AppState {
  cartStore: {
    cartProducts: Product[],
  },
  catalogStore: {
    products: Product[],
  }
}
