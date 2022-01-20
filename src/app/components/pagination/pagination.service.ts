import { Injectable } from "@angular/core";
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {
  filteredProductsSelector,
} from "../../reducers/filters/filters";
import {pageIndexSelector, setPaginatedProducts, updatePage} from "../../reducers/pagination/pagination";
import * as _ from "lodash";

@Injectable({
  providedIn: "root"
})
export class PaginationService {
  private isInit = false;
  private filteredProducts: Product[] = [];
  private pageIndex = 0;

  constructor(private store: Store) {}

  init() {
    if (this.isInit) {
      return
    }

    this.store.select(filteredProductsSelector).subscribe((products) => {
      this.filteredProducts = products;
      if (this.isInit) {
        this.store.dispatch(updatePage({pageIndex: 0}));
      }
    });
    this.store.select(pageIndexSelector).subscribe((pageIndex) => {
      this.pageIndex = pageIndex;
      if (this.isInit) {
        this.setPaginatedProducts();
      }
    });

    this.isInit = true;
  }

  setPaginatedProducts(filteredProducts = this.filteredProducts) {
    const products = _.chunk(filteredProducts, 10)
    const paginatedProducts = products[this.pageIndex];
    this.store.dispatch(setPaginatedProducts({paginatedProducts}));
  }
}
