import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";
import {Price, Product} from "../../interfaces/products";

export interface FiltersState {
  filteredProducts: Product[],
  prices: Price[],
  productType: string,
  search: string,
}

export const initialState: FiltersState = {
  filteredProducts: [],
  prices: [
    {
      range: [100, 249.99],
      viewValue: '$100 - $249.99',
      checked: false,
    },
    {
      range: [250, 499.99],
      viewValue: '$250 - $499.99',
      checked: false,
    },
    {
      range: [500, 749.99],
      viewValue: '$500 - $749.99',
      checked: false,
    },
    {
      range: [750, 999.99],
      viewValue: '$750 - $999.99',
      checked: false,
    },
    {
      range: [1000, 1499.99],
      viewValue: '$1000 - $1499.99',
      checked: false,
    },
    {
      range: [1500, 1999.99],
      viewValue: '$1500 - $1999.99',
      checked: false,
    },
    {
      range: [2000, 2999.99],
      viewValue: '$2000 - $2999.99',
      checked: false,
    },
    {
      range: [3000, 4999.99],
      viewValue: '$3000 - $4999.99',
      checked: false,
    },
    {
      range: [5000, 'up'],
      viewValue: '$5000 and Up',
      checked: false,
    },
  ],
  productType: 'all',
  search: '',
}

export const setFilteredProducts = createAction('[FILTERS] set filtered products',
  props<{filteredProducts: Product[]}>()
);
export const setPrices = createAction('[FILTERS] set prices',
  props<{viewValue: string}>()
);
export const setType = createAction('[FILTERS] set type',
  props<{productType: string}>()
);
export const debounceInput = createAction('[FILTERS] debounce input',
  props<{value: string}>()
);
export const setSearch = createAction('[FILTERS] set search',
  props<{search: string}>()
);

export const filtersReducer = createReducer(
  initialState,
  on(setFilteredProducts, (state, action) => ({
    ...state,
    filteredProducts: action.filteredProducts
  })),
  on(setPrices, (state, {viewValue}) => ({
    ...state,
    prices: state.prices.map(price => price.viewValue === viewValue ? {
      ...price,
      checked: !price.checked
    }: price)
  })),
  on(setType, (state, action) => ({
    ...state,
    productType: action.productType
  })),
  on(setSearch, (state, action) => ({
    ...state,
    search: action.search
  })),
);

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
