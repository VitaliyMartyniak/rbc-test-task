import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {loadProducts, setCatalogProducts} from "./catalog";
import {map, mergeMap, Observable, of, pipe, switchMap} from "rxjs";
import {Product} from "../../interfaces/products";
import {CatalogService} from "../../views/catalog/catalog.service";
import {addToCart} from "../cart/cart";
import {setSnackbarText} from "../notifications/notifications";

@Injectable()
export class CatalogEffects {
  constructor(private actions$: Actions, private catalogService: CatalogService) {}

  loadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() => of(this.catalogService.getProducts())),
      pipe(
        map((catalogProducts: Product[]) => setCatalogProducts({catalogProducts})
      )
    )))
}
