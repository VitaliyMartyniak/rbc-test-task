import {createReducer, on} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";
import {setCatalogProducts} from "../actions/catalog";

export interface CatalogState {
  catalogProducts: Product[];
}

export const initialState: CatalogState = {
  catalogProducts: [],
}

export const catalogReducer = createReducer(
  initialState,
  on(setCatalogProducts, (state, {catalogProducts}) => ({
    ...state,
    catalogProducts
  })),
);
