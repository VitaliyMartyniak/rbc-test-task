import {createAction, props} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";

export const addToCart = createAction('[CART] add to cart',
  props<{product: Product}>()
);
export const changeExistingProductCount = createAction('[CART] change existing product count',
  props<{product: Product, value: number}>()
);
export const removeFromCart = createAction('[CART] remove from cart',
  props<{id: number}>()
);
export const submitOrder = createAction('[CART] submit order');
