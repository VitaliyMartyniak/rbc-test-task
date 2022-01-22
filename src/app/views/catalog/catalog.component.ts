import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/catalog";
import {select, Store} from "@ngrx/store";
import {paginatedProductsSelector} from "../../reducers/pagination/pagination";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsModalComponent} from "../../components/product-details-modal/product-details-modal.component";
import {loadProducts} from "../../reducers/catalog/catalog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  paginatedProducts$: Observable<Product[]> = this.store.pipe(select(paginatedProductsSelector));

  constructor(private snackBar: MatSnackBar, private store: Store, public modal: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  openModal(product: Product): void {
    this.modal.open(ProductDetailsModalComponent, {
      data: {
        product,
      },
    });
  }

}
