import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Product} from "../../interfaces/products";
import {setPaginatedProducts} from "../pagination/pagination";

// export const setupPagination = createAction('[PAGINATION] setup pagination');
// export const updatePage = createAction('[PAGINATION] update page');

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
  on(setCatalogProducts, (state, action) => ({
    ...state,
    catalogProducts: action.catalogProducts
  })),
);

export const featureSelector = createFeatureSelector<CatalogState>('catalog');
export const catalogProductsSelector = createSelector(
  featureSelector,
  state => state.catalogProducts
);
