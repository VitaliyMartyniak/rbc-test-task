import {createReducer, on} from "@ngrx/store";
import {Price, Product} from "../../interfaces/catalog";
import {setFilteredProducts, setPrices, setSearch, setType} from "../actions/filters";

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

export const filtersReducer = createReducer(
  initialState,
  on(setFilteredProducts, (state, {filteredProducts}) => ({
    ...state,
    filteredProducts
  })),
  on(setPrices, (state, {viewValue}) => ({
    ...state,
    prices: state.prices.map((price: Price) => price.viewValue === viewValue ? {
      ...price,
      checked: !price.checked
    }: price)
  })),
  on(setType, (state, {productType}) => ({
    ...state,
    productType
  })),
  on(setSearch, (state, {search}) => ({
    ...state,
    search
  })),
);
