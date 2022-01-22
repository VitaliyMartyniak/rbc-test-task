import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map} from "rxjs";
import {addToCart, submitOrder} from "./cart";
import {setSnackbarText} from "../notifications/notifications";

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions) {}

  addToCart$ = createEffect(
    () => this.actions$.pipe(
      ofType(addToCart),
      map(() => setSnackbarText({snackbarText: 'Product added to cart!'})
      )))

  submitOrder$ = createEffect(
    () => this.actions$.pipe(
      ofType(submitOrder),
      map(() => setSnackbarText({snackbarText: 'Thanks for your purchase!'})
      )))
}
