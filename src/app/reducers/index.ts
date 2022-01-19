import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {paginationReducer, PaginationState} from "./pagination/pagination";
import {catalogReducer, CatalogState} from "./catalog/catalog";

export interface State {
  pagination: PaginationState;
  catalog: CatalogState;
}

export const reducers: ActionReducerMap<State> = {
  pagination: paginationReducer,
  catalog: catalogReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
