import { Injectable } from '@angular/core';
// @ts-ignore
import data from './products.json';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getProducts() {
    return data.products;
  }
}
