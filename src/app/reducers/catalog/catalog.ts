import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";

export interface CatalogState {
  catalogProducts: Product[];
}

export const initialState: CatalogState = {
  catalogProducts: [],
}

export const loadProducts = createAction('[CATALOG] load products');
export const setCatalogProducts = createAction('[CATALOG] set catalog products',
  props<{catalogProducts: Product[]}>()
);

export const catalogReducer = createReducer(
  initialState,
  on(setCatalogProducts, (state, {catalogProducts}) => ({
    ...state,
    catalogProducts
  })),
);

export const featureSelector = createFeatureSelector<CatalogState>('catalog');
export const catalogProductsSelector = createSelector(
  featureSelector,
  state => state.catalogProducts
);
