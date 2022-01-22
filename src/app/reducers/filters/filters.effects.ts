import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {debounceInput, setFilteredProducts, setPrices, setSearch, setType} from "./filters";
import {debounceTime, map, withLatestFrom} from "rxjs";
import {catalogProductsSelector} from "../catalog/catalog";

@Injectable()
export class FiltersEffects {
  constructor(private actions$: Actions, private store: Store) {}

  debounceInput$ = createEffect(
    () => this.actions$.pipe(
      ofType(debounceInput),
      debounceTime(1000),
      map((action) => {
        return setSearch({search: action.value})
      }),
    ));

  // filterByType$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(setType),
  //     withLatestFrom(this.store.select(catalogProductsSelector)),
  //     map(([action, catalogProducts]) => {
  //       let filteredProducts = [...catalogProducts];
  //       if (action.productType !== 'all') {
  //         filteredProducts = filteredProducts.filter(product => product.type === action.productType)
  //       }
  //       console.log('filterByType$ works');
  //       return setFilteredProducts({filteredProducts})
  //     }),
  //   ));
  //
  // filterBySearch$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(setSearch),
  //     withLatestFrom(this.store.select(catalogProductsSelector)),
  //     map(([action, catalogProducts]) => {
  //       let filteredProducts = [...catalogProducts];
  //       filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(action.search.toLowerCase()))
  //       console.log('filterBySearch$ works');
  //       return setFilteredProducts({filteredProducts})
  //     }),
  //   ));

  // filterByPrice$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(setPrices),
  //     withLatestFrom(this.store.select(catalogProductsSelector)),
  //     map(([{prices}, catalogProducts]) => {
  //       let filteredProducts = [...catalogProducts];
  //       filteredProducts = filteredProducts.filter(product => {
  //         let shouldPassFilter = false;
  //         prices.forEach(price => {
  //           if(price.checked && product.price >= price.value[0] && product.price <= price.value[1]) {
  //             shouldPassFilter = true;
  //           }
  //         })
  //         return shouldPassFilter;
  //       })
  //       return setFilteredProducts({filteredProducts})
  //     }),
  //   ));
}
