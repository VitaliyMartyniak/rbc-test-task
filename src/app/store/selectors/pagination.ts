import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PaginationState} from "../reducers/pagination";

export const featureSelector = createFeatureSelector<PaginationState>('pagination');
export const paginatedProductsSelector = createSelector(
  featureSelector,
  state => state.paginatedProducts
);
export const pageIndexSelector = createSelector(
  featureSelector,
  state => state.pageIndex
);
