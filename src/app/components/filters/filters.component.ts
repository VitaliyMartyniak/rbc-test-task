import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {productTypeSelector, searchSelector, setSearch, setType} from "../../reducers/filters/filters";
import {Price} from "../../interfaces/products";

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

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.store.select(pricesSelector).subscribe((prices) => {
    //   this.prices = prices;
    //   console.log('this.prices', this.prices);
    // });
    this.store.select(searchSelector).subscribe((search) => {
      this.search = search;
    });
    this.store.select(productTypeSelector).subscribe((type) => {
      this.productType = type;
    });
  }

  searchProducts(value: string) {
    this.store.dispatch(setSearch({search: value}));
  }

  changeTypeSelection(value: string) {
    this.store.dispatch(setType({productType: value}));
  }

  // changePriceSelection($event: MatCheckboxChange, index: number) {
  //   const mutatedPrices = [...this.prices];
  //   mutatedPrices[index].checked = $event.checked;
  //   // const clone = {
  //   //   prices: Object.assign({}, mutatedPrices)
  //   // };
  //   this.store.dispatch(setPrices({prices: mutatedPrices}));
  // }
}
