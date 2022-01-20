import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setPaginatedProducts, updatePage} from "./pagination";
import {map, withLatestFrom} from "rxjs";
import * as _ from "lodash";
import {Store} from "@ngrx/store";
import {filteredProductsSelector, setFilteredProducts} from "../filters/filters";

@Injectable()
export class PaginationEffects {
  constructor(private actions$: Actions, private store: Store) {}

  // paginateAfterChangingPage$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(updatePage),
  //     withLatestFrom(this.store.select(filteredProductsSelector)),
  //     map(([action, filteredProducts]) => {
  //       const products = _.chunk(filteredProducts, 10)
  //       const paginatedProducts = products[action.pageIndex];
  //       console.log('paginateAfterChangingPage$ works', paginatedProducts);
  //       return setPaginatedProducts({paginatedProducts})
  //     }),
  //   ));
  //
  // paginateAfterFiltering$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(setFilteredProducts),
  //     withLatestFrom(this.store.select(filteredProductsSelector)),
  //     map(([, filteredProducts]) => {
  //       const products = _.chunk(filteredProducts, 10)
  //       const paginatedProducts = products[0];
  //       console.log('paginateAfterFiltering$ works', paginatedProducts);
  //       return setPaginatedProducts({paginatedProducts})
  //     }),
  //   ));
}
