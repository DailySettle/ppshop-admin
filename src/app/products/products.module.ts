import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductTableComponent} from './product-table/product-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MaterialModule} from '../material/material.module';

export const productsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, ProductTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MaterialModule
  ]
})
export class ProductsModule {
}
