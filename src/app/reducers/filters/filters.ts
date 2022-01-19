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
      value: [250, 499.99],
      viewValue: '$250 - $499.99',
      checked: false,
    },
    {
      value: [500, 749.99],
      viewValue: '$500 - $749.99',
      checked: false,
    },
    {
      value: [750, 999.99],
      viewValue: '$750 - $999.99',
      checked: false,
    },
    {
      value: [1000, 1499.99],
      viewValue: '$1000 - $1499.99',
      checked: false,
    },
    {
      value: [1500, 1999.99],
      viewValue: '$1500 - $1999.99',
      checked: false,
    },
    {
      value: [2000, 2999.99],
      viewValue: '$2000 - $2999.99',
      checked: false,
    },
    {
      value: [3000, 4999.99],
      viewValue: '$3000 - $4999.99',
      checked: false,
    },
    {
      value: [5000, 'up'],
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
  // props<{checked: boolean, index: number}>()
  props<{prices: Price[]}>()
);
export const setType = createAction('[FILTERS] set type',
  props<{productType: string}>()
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
  on(setPrices, (state, {prices}) => {
    // const mutatedPrices = [...state.prices];
    // mutatedPrices[index]['checked'] = checked;
    return {
      ...state,
      prices: prices
    }
  }),
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
