import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {paginationReducer, PaginationState} from "./pagination/pagination";
import {catalogReducer, CatalogState} from "./catalog/catalog";
import {filtersReducer, FiltersState} from "./filters/filters";

export interface State {
  pagination: PaginationState;
  catalog: CatalogState;
  filters: FiltersState;
}

export const reducers: ActionReducerMap<State> = {
  pagination: paginationReducer,
  catalog: catalogReducer,
  filters: filtersReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
