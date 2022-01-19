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
import { PaginationComponent } from './components/pagination/pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {EffectsModule} from "@ngrx/effects";
import {metaReducers, reducers} from "./reducers";
import {PaginationEffects} from "./reducers/pagination/pagination.effects";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FiltersEffects} from "./reducers/filters/filters.effects";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CatalogComponent,
    CartComponent,
    FiltersComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([PaginationEffects, FiltersEffects]),
    MatPaginatorModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
