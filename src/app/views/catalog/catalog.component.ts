import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/catalog";
import {Store} from "@ngrx/store";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsModalComponent} from "../../components/product-details-modal/product-details-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";
import {paginatedProductsSelector} from "../../store/selectors/pagination";
import {loadProducts} from "../../store/actions/catalog";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  paginatedProducts: Product[] = [];

  paginatedProductsSub: Subscription;

  constructor(private snackBar: MatSnackBar, private store: Store, private modal: MatDialog) { }

  ngOnInit(): void {
    this.paginatedProductsSub = this.store.select(paginatedProductsSelector).subscribe((products: Product[]): void => {
      this.paginatedProducts = products;
    })
    this.store.dispatch(loadProducts());
  }

  openModal(product: Product): void {
    this.modal.open(ProductDetailsModalComponent, {
      data: {
        product,
      },
    });
  }

  ngOnDestroy(): void {
    this.paginatedProductsSub.unsubscribe();
  }
}
