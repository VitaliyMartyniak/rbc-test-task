import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FiltersState} from "../reducers/filters";

export const featureSelector = createFeatureSelector<FiltersState>('filters');
export const filteredProductsSelector = createSelector(
  featureSelector,
  state => state.filteredProducts
);
export const pricesSelector = createSelector(
  featureSelector,
  state => state.prices
);
export const productTypeSelector = createSelector(
  featureSelector,
  state => state.productType
);
export const searchSelector = createSelector(
  featureSelector,
  state => state.search
);
