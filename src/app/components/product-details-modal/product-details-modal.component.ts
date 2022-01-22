import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {addToCart} from "../../reducers/cart/cart";

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

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({product}));
  }
}
