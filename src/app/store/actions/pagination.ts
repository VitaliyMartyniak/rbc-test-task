import {createAction, props} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";

export const setPaginatedProducts = createAction('[PAGINATION] set paginated products',
  props<{paginatedProducts: Product[]}>()
);
export const updatePage = createAction('[PAGINATION] update page',
  props<{pageIndex: number}>()
);
