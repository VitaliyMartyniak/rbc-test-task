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
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FiltersEffects} from "./reducers/filters/filters.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductDetailsModalComponent } from './components/product-details-modal/product-details-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CatalogEffects} from "./reducers/catalog/catalog.effects";
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CartEffects} from "./reducers/cart/cart.effects";
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CatalogComponent,
    CartComponent,
    FiltersComponent,
    PaginationComponent,
    ProductDetailsModalComponent,
    SnackbarComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([FiltersEffects, CatalogEffects, CartEffects]),
    MatPaginatorModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
