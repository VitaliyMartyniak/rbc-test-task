import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {paginationReducer, PaginationState} from "./reducers/pagination";
import {catalogReducer, CatalogState} from "./reducers/catalog";
import {filtersReducer, FiltersState} from "./reducers/filters";
import {cartReducer, CartState} from "./reducers/cart";
import {notificationsReducer, NotificationsState} from "./reducers/notifications";

export interface State {
  pagination: PaginationState;
  catalog: CatalogState;
  filters: FiltersState;
  cart: CartState;
  notifications: NotificationsState;
}

export const reducers: ActionReducerMap<State> = {
  pagination: paginationReducer,
  catalog: catalogReducer,
  filters: filtersReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
