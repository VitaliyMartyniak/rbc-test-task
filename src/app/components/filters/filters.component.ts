import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  debounceInput,
  pricesSelector,
  productTypeSelector,
  searchSelector,
  setPrices,
  setType
} from "../../reducers/filters/filters";
import {Price} from "../../interfaces/products";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {FiltersService} from "./filters.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  productTypes = [
    {
      value: 'all',
      viewValue: 'All'
    },
    {
      value: 'appliances',
      viewValue: 'Appliances'
    },
    {
      value: 'phones',
      viewValue: 'Phones'
    },
    {
      value: 'games',
      viewValue: 'Video Games'
    },
    {
      value: 'TVs',
      viewValue: 'TVs'
    },
  ]

  prices: Price[] = [];

  productType = '';

  search = '';

  constructor(private store: Store, private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.store.select(pricesSelector).subscribe((prices) => {
      this.prices = prices;
    });
    this.store.select(searchSelector).subscribe((search) => {
      this.search = search;
    });
    this.store.select(productTypeSelector).subscribe((type) => {
      this.productType = type;
    });
    this.filtersService.init();
  }

  searchProducts(value: string) {
    this.store.dispatch(debounceInput({value}));
  }

  changeTypeSelection(value: string) {
    this.store.dispatch(setType({productType: value}));
  }

  changePriceSelection(event: MatCheckboxChange, viewValue: string) {
    this.store.dispatch(setPrices({viewValue}));
  }
}
