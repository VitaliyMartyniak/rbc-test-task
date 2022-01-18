import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { CartComponent } from './views/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { FiltersComponent } from './components/filters/filters.component';
import { StoreModule } from '@ngrx/store';
import {cartReducer} from "./store/cart/cart.reducer";
import {catalogReducer} from "./store/catalog/catalog.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CatalogComponent,
    CartComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot({cartStore: cartReducer, catalogStore: catalogReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
