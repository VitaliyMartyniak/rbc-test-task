import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {clearSnackbarText, snackbarTextSelector} from "../../reducers/notifications/notifications";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    this.store.select(snackbarTextSelector).subscribe((text) => {
      if (text) {
        let snackBarRef = this._snackBar.open(text, 'close', {duration: 5000});
        snackBarRef.afterDismissed().subscribe(() => {
          this.store.dispatch(clearSnackbarText());
        })
      }
    })
  }

}
