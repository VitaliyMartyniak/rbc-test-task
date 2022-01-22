import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {debounceInput, setSearch} from "./filters";
import {debounceTime, map} from "rxjs";

@Injectable()
export class FiltersEffects {
  constructor(private actions$: Actions) {}

  debounceInput$ = createEffect(
    () => this.actions$.pipe(
      ofType(debounceInput),
      debounceTime(1000),
      map(({value}) => {
        return setSearch({search: value})
      }),
    ));
}
