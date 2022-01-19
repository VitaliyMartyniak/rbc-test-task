import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {setFilteredProducts, setSearch, setType} from "./filters";
import {map, withLatestFrom} from "rxjs";
import {catalogProductsSelector} from "../catalog/catalog";

@Injectable()
export class FiltersEffects {
  constructor(private actions$: Actions, private store: Store) {}

  filterByType$ = createEffect(
    () => this.actions$.pipe(
      ofType(setType),
      withLatestFrom(this.store.select(catalogProductsSelector)),
      map(([action, catalogProducts]) => {
        let filteredProducts = [...catalogProducts];
        filteredProducts = filteredProducts.filter(product => product.type === action.productType)
        console.log('filterByType$ works');
        return setFilteredProducts({filteredProducts})
      }),
    ));

  filterBySearch$ = createEffect(
    () => this.actions$.pipe(
      ofType(setSearch),
      withLatestFrom(this.store.select(catalogProductsSelector)),
      map(([action, catalogProducts]) => {
        let filteredProducts = [...catalogProducts];
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(action.search.toLowerCase()))
        console.log('filterBySearch$ works');
        return setFilteredProducts({filteredProducts})
      }),
    ));
}