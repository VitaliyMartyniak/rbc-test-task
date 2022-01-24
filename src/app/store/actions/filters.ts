import {createAction, props} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";

export const setFilteredProducts = createAction('[FILTERS] set filtered products',
  props<{filteredProducts: Product[]}>()
);
export const setPrices = createAction('[FILTERS] set prices',
  props<{viewValue: string}>()
);
export const setType = createAction('[FILTERS] set type',
  props<{productType: string}>()
);
export const debounceInput = createAction('[FILTERS] debounce input',
  props<{value: string}>()
);
export const setSearch = createAction('[FILTERS] set search',
  props<{search: string}>()
);
