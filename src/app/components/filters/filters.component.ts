import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
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
import {Observable, Subscription} from "rxjs";

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
      value: 'appliance',
      viewValue: 'Appliances'
    },
    {
      value: 'phone',
      viewValue: 'Phones'
    },
    {
      value: 'game',
      viewValue: 'Video Games'
    },
    {
      value: 'tv',
      viewValue: 'TVs'
    },
  ]

  prices$: Observable<Price[]> = this.store.pipe(select(pricesSelector));

  search$: Observable<string> = this.store.pipe(select(searchSelector));

  productType = '';

  productTypeSub: Subscription;

  constructor(private store: Store, private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.productTypeSub = this.store.select(productTypeSelector).subscribe((type: string): void => {
      this.productType = type;
    });
    this.filtersService.init();
  }

  searchProducts(value: string): void {
    this.store.dispatch(debounceInput({value}));
  }

  changeTypeSelection(productType: string): void {
    this.store.dispatch(setType({productType}));
  }

  changePriceSelection(event: MatCheckboxChange, viewValue: string): void {
    this.store.dispatch(setPrices({viewValue}));
  }

  ngOnDestroy(): void {
    this.productTypeSub.unsubscribe();
  }
}
