import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartState} from "../reducers/cart";

export const featureSelector = createFeatureSelector<CartState>('cart');
export const cartProductsSelector = createSelector(
  featureSelector,
  state => state.cartProducts
);
