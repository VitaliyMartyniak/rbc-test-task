import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Product} from "../../interfaces/products";

export interface CartState {
  cartProducts: Product[],
}

export const initialState: CartState = {
  cartProducts: [],
}

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

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {product}) => {
    const existingProduct = state.cartProducts.find(cartProduct => cartProduct.id === product.id);
    if (!existingProduct) {
      return ({
        ...state,
        cartProducts: [...state.cartProducts, {...product, countInCart: 1}],
      })
    } else {
      return ({
        ...state,
        cartProducts: state.cartProducts.map(cartProduct => cartProduct.id === product.id ? {
          ...cartProduct, countInCart: cartProduct.countInCart! + 1
        }: cartProduct)
      })
    }
  }),
  on(changeExistingProductCount, (state, {product, value}) => ({
    ...state,
    cartProducts: state.cartProducts.map(cartProduct => cartProduct.id === product.id ? {
      ...cartProduct, countInCart: value
    } : cartProduct),
  })),
  on(removeFromCart, (state, {id}) => ({
    ...state,
    cartProducts: state.cartProducts.filter(product => product.id !== id),
  })),
  on(submitOrder, (state) => ({
    ...state,
    cartProducts: []
  })),
);

export const featureSelector = createFeatureSelector<CartState>('cart');
export const cartProductsSelector = createSelector(
  featureSelector,
  state => state.cartProducts
);
