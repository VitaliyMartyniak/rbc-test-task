import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setPaginatedProducts, updatePage} from "./pagination";
import {map, withLatestFrom} from "rxjs";
import * as _ from "lodash";
import {Store} from "@ngrx/store";
import {catalogProductsSelector} from "../catalog/catalog";

@Injectable()
export class PaginationEffects {
  constructor(private actions$: Actions, private store: Store) {}

  setupPagination$ = createEffect(
    () => this.actions$.pipe(
      ofType(updatePage),
      withLatestFrom(this.store.select(catalogProductsSelector)),
      map(([action, catalogProducts]) => {
        const products = _.chunk(catalogProducts, 10)
        const paginatedProducts = products[action.pageIndex];
        return setPaginatedProducts({paginatedProducts})
      }),
    ));
}
