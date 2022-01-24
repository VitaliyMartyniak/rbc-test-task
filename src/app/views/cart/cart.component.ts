import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../../interfaces/catalog";
import {Subscription} from "rxjs";
import {cartProductsSelector} from "../../store/selectors/cart";
import {changeExistingProductCount, removeFromCart, submitOrder} from "../../store/actions/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  cartProductsSub: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cartProductsSub = this.store.select(cartProductsSelector).subscribe((products: Product[]): void => {
      this.products = products;
      this.calculateTotal();
    })
  }

  changeProductCount (value: number, product: Product): void {
    this.store.dispatch(changeExistingProductCount({product, value}));
  }

  deleteFromCart(id: number): void {
    this.store.dispatch(removeFromCart({id}));
  }

  submit(): void {
    this.store.dispatch(submitOrder());
  }

  calculateTotal(): number {
    let total = 0
    if (this.products.length) {
      this.products.forEach((product: Product) => {
        total += product.price * product.countInCart!
      })
    }
    return total
  }

  ngOnDestroy(): void {
    this.cartProductsSub.unsubscribe();
  }
}
