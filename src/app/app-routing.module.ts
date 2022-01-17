import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {CatalogComponent} from "./views/catalog/catalog.component";
import {CartComponent} from "./views/cart/cart.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'catalog', pathMatch: 'full'},
      {path: 'catalog', component: CatalogComponent},
      {path: 'cart', component: CartComponent},
      {path: '**', redirectTo: '/'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
