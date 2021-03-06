import { Injectable } from "@angular/core";
import {Product} from "../../interfaces/catalog";
import {Store} from "@ngrx/store";
import * as _ from "lodash";
import {filteredProductsSelector} from "../../store/selectors/filters";
import {setPaginatedProducts, updatePage} from "../../store/actions/pagination";
import {pageIndexSelector} from "../../store/selectors/pagination";

@Injectable({
  providedIn: "root"
})
export class PaginationService {
  private isInit = false;
  private filteredProducts: Product[] = [];
  private pageIndex = 0;

  constructor(private store: Store) {}

  init(): void {
    if (this.isInit) {
      return
    }

    this.store.select(filteredProductsSelector).subscribe((products: Product[]): void => {
      this.filteredProducts = products;
      if (this.isInit) {
        this.store.dispatch(updatePage({pageIndex: 0}));
      }
    });
    this.store.select(pageIndexSelector).subscribe((pageIndex: number): void => {
      this.pageIndex = pageIndex;
      if (this.isInit) {
        this.setPaginatedProducts();
      }
    });

    this.isInit = true;
  }

  setPaginatedProducts(filteredProducts: Product[] = this.filteredProducts): void {
    const products = _.chunk(filteredProducts, 10)
    const paginatedProducts = products[this.pageIndex];
    this.store.dispatch(setPaginatedProducts({paginatedProducts}));
  }
}
