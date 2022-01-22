import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {paginatedProductsSelector} from "../../reducers/pagination/pagination";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsModalComponent} from "../../components/product-details-modal/product-details-modal.component";
import {loadProducts} from "../../reducers/catalog/catalog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private snackBar: MatSnackBar, private store: Store, public modal: MatDialog) { }

  ngOnInit(): void {
    this.store.select(paginatedProductsSelector).subscribe((paginatedProducts) => {
      this.products = paginatedProducts;
    })
    this.store.dispatch(loadProducts());
  }

  openModal(product: Product) {
    this.modal.open(ProductDetailsModalComponent, {
      data: {
        product,
      },
    });
  }

}
