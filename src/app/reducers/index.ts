import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {paginationReducer, PaginationState} from "./pagination/pagination";
import {catalogReducer, CatalogState} from "./catalog/catalog";
import {filtersReducer, FiltersState} from "./filters/filters";
import {cartReducer, CartState} from "./cart/cart";
import {notificationsReducer, NotificationsState} from "./notifications/notifications";

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
