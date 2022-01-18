import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/products";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('catalogStore').subscribe(({products}) => {
      this.products = products;
    })
  }

}
