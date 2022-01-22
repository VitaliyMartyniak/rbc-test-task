import { Injectable } from "@angular/core";
import {Store} from "@ngrx/store";
import {Price, Product} from "../../interfaces/products";
import {pricesSelector, productTypeSelector, searchSelector, setFilteredProducts} from "../../reducers/filters/filters";
import {catalogProductsSelector} from "../../reducers/catalog/catalog";
import {PaginationService} from "../pagination/pagination.service";

@Injectable({
  providedIn: "root"
})
export class FiltersService {
  private isInit = false;
  private prices: Price[] = [];
  private productType = '';
  private search = '';
  private catalogProducts: Product[] = [];
  private filteredProducts: Product[] = [];

  constructor(private store: Store, private paginationService: PaginationService) {}

  init() {
    if (this.isInit) {
      return
    }

    this.store.select(catalogProductsSelector).subscribe((products) => {
      this.catalogProducts = products;
      this.filterCatalogProducts();
    });
    this.store.select(pricesSelector).subscribe((prices) => {
      this.prices = prices;
      if (this.isInit) {
        this.filterCatalogProducts();
      }
    });
    this.store.select(productTypeSelector).subscribe((productType) => {
      this.productType = productType;
      if (this.isInit) {
        this.filterCatalogProducts();
      }
    });
    this.store.select(searchSelector).subscribe((search) => {
      this.search = search;
      if (this.isInit) {
        this.filterCatalogProducts();
      }
    });

    this.isInit = true;
  }

  filterCatalogProducts() {
    this.filteredProducts = [...this.catalogProducts];
    this.filterByPrice();
    this.filterByProductType();
    this.filterBySearch();
    this.store.dispatch(setFilteredProducts({filteredProducts: this.filteredProducts}));
    this.paginationService.setPaginatedProducts(this.filteredProducts);
  }

  private filterByPrice(): void {
    let isAnyPriceChecked = false;
    this.prices.forEach(price => {
      if(price.checked) {
        isAnyPriceChecked = true;
      }
    })
    if (!isAnyPriceChecked) {
      return
    }

    this.filteredProducts = this.filteredProducts.filter(product => {
      let shouldPassFilter = false;
      this.prices.forEach(price => {
        if(price.checked && product.price >= price.range[0] && (product.price <= price.range[1] || price.range[1] === 'up')) {
          shouldPassFilter = true;
        }
      })
      return shouldPassFilter;
    })
  }

  private filterByProductType(): void {
    if (!this.productType || this.productType === 'all') {
      return
    }
    this.filteredProducts = this.filteredProducts.filter(product => product.type === this.productType)
  }

  private filterBySearch(): void {
    this.filteredProducts = this.filteredProducts.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()))
  }
}
