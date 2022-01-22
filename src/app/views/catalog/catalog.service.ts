import { Injectable } from '@angular/core';
import data from './products.json';
import {Product} from "../../interfaces/catalog";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getProducts(): Product[] {
    return data.products;
  }
}
