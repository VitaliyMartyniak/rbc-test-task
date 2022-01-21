import { Component, OnInit } from '@angular/core';
import {cartProductsSelector} from "../../reducers/cart/cart";
import {Store} from "@ngrx/store";
import {Product} from "../../interfaces/products";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cartCounter = 0

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(cartProductsSelector).subscribe((products) => {
      this.calculateCounter(products);
    })
  }

  calculateCounter(products: Product[]) {
    let counter = 0
    if (products.length) {
      products.forEach((product: Product) => {
        counter += product.countInCart!
      })
    }
    this.cartCounter = counter;
  }

}
