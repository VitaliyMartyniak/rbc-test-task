import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CatalogState} from "../reducers/catalog";

export const featureSelector = createFeatureSelector<CatalogState>('catalog');
export const catalogProductsSelector = createSelector(
  featureSelector,
  state => state.catalogProducts
);
