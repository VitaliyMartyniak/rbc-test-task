import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, of, pipe, switchMap} from "rxjs";
import {Product} from "../../interfaces/catalog";
import {CatalogService} from "../../views/catalog/catalog.service";
import {loadProducts, setCatalogProducts} from "../actions/catalog";

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
