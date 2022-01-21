import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {paginatedProductsSelector} from "../../reducers/pagination/pagination";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsModalComponent} from "../../components/product-details-modal/product-details-modal.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store, public modal: MatDialog) { }

  ngOnInit(): void {
    this.store.select(paginatedProductsSelector).subscribe((paginatedProducts) => {
      this.products = paginatedProducts;
    })
  }

  openModal(product: Product) {
    this.modal.open(ProductDetailsModalComponent, {
      data: {
        product,
      },
    });
  }
}
