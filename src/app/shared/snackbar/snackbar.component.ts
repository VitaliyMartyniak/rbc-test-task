import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {clearSnackbarText, snackbarTextSelector} from "../../reducers/notifications/notifications";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {

  snackbarTextSub: Subscription;

  constructor(private _snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    this.snackbarTextSub = this.store.select(snackbarTextSelector).subscribe((text: string): void => {
      if (text) {
        let snackBarRef = this._snackBar.open(text, 'close', {duration: 5000, panelClass: ['custom-snackbar']});
        snackBarRef.afterDismissed().subscribe((): void => {
          this.store.dispatch(clearSnackbarText());
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.snackbarTextSub.unsubscribe();
  }
}
