import {Action} from "@ngrx/store";
import {Product} from "../../interfaces/products";

export namespace CART_ACTION {
  export const ADD_PRODUCT = 'ADD_PRODUCT'
}

export class AddProduct implements Action {
  readonly type = CART_ACTION.ADD_PRODUCT

  constructor(public payload: Product) {

  }
}
