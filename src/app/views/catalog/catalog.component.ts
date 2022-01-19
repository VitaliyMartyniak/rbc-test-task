import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {paginatedProductsSelector} from "../../reducers/pagination/pagination";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(paginatedProductsSelector).subscribe((paginatedProducts) => {
      this.products = paginatedProducts;
    })
  }

}
