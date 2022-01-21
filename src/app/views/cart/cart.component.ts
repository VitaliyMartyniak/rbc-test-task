import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {cartProductsSelector, changeExistingProductCount, removeFromCart, submitOrder} from "../../reducers/cart/cart";
import {Product} from "../../interfaces/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(cartProductsSelector).subscribe((products) => {
      this.products = products;
      this.calculateTotal();
    })
  }

  changeProductCount (value: number, product: Product) {
    this.store.dispatch(changeExistingProductCount({product, value}));
  }

  deleteFromCart(id: number) {
    this.store.dispatch(removeFromCart({id}));
  }

  submit() {
    this.store.dispatch(submitOrder());
  }

  calculateTotal() {
    let total = 0
    if (this.products.length) {
      this.products.forEach((product) => {
        total += product.price * product.countInCart!
      })
    }
    return total
  }
}
