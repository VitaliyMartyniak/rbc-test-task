import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";
import {Subscription} from "rxjs";
import {cartProductsSelector} from "../../store/selectors/cart";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cartCounter = 0

  cartProductsSub: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cartProductsSub = this.store.select(cartProductsSelector).subscribe((products: Product[]): void => {
      this.calculateCounter(products);
    })
  }

  calculateCounter(products: Product[]): void {
    let counter = 0
    if (products.length) {
      products.forEach((product: Product): void => {
        counter += product.countInCart!
      })
    }
    this.cartCounter = counter;
  }

  ngOnDestroy(): void {
    this.cartProductsSub.unsubscribe();
  }
}
