import {createAction, props} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";

export const loadProducts = createAction('[CATALOG] load products');
export const setCatalogProducts = createAction('[CATALOG] set catalog products',
  props<{catalogProducts: Product[]}>()
);
