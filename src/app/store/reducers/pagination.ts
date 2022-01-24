import {createReducer, on} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";
import {setPaginatedProducts, updatePage} from "../actions/pagination";

export interface PaginationState {
  paginatedProducts: Product[];
  pageIndex: number;
}

export const initialState: PaginationState = {
  paginatedProducts: [],
  pageIndex: 0,
}

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
