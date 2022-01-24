import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../../interfaces/catalog";
import {Store} from "@ngrx/store";
import {addToCart} from "../../store/actions/cart";

export interface DialogData {
  product: Product
}

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss']
})
export class ProductDetailsModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store) {}

  addProductToCart(product: Product): void {
    this.store.dispatch(addToCart({product}));
  }
}
