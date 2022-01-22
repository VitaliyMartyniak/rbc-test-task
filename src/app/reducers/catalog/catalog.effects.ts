import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadProducts, setCatalogProducts} from "./catalog";
import {map, of, pipe, switchMap} from "rxjs";
import {Product} from "../../interfaces/products";
import {CatalogService} from "../../views/catalog/catalog.service";

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
