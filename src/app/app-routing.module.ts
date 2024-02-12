import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
import { ProductsComponent } from './components/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CategoryComponent } from './components/category/category.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  // ... other routes

  {
    path: '',
    data: { 'componentName': 'SampleComponent' },
    component: HomeComponent,
    children: [
      {
        path: 'products',
        data: { 'componentName': 'ProductsComponent' },
        component: ProductsComponent,
      },
      {
        path: 'category',
        data: { 'componentName': 'CategoryComponent' },
        component: CategoryComponent,
      },

      {
        path: 'supplier',
        data: { 'componentName': 'SupplierComponent' },
        component: SupplierComponent,
      },
      { path: '**', pathMatch: 'full', 
    component: PagenotfoundComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
