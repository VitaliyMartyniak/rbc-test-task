import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Product} from "../../interfaces/products";

export interface PaginationState {
  paginatedProducts: Product[];
  pageIndex: number;
}

export const initialState: PaginationState = {
  paginatedProducts: [],
  pageIndex: 0,
}

export const setPaginatedProducts = createAction('[PAGINATION] set paginated products',
  props<{paginatedProducts: Product[]}>()
);
export const updatePage = createAction('[PAGINATION] update page',
  props<{pageIndex: number}>()
);

export const paginationReducer = createReducer(
  initialState,
  on(setPaginatedProducts, (state, action) => ({
    ...state,
    paginatedProducts: action.paginatedProducts
  })),
  on(updatePage, (state, action) => ({
    ...state,
    pageIndex: action.pageIndex
  })),
);

export const featureSelector = createFeatureSelector<PaginationState>('pagination');
export const paginatedProductsSelector = createSelector(
  featureSelector,
  state => state.paginatedProducts
);
export const pageIndexSelector = createSelector(
  featureSelector,
  state => state.pageIndex
);
