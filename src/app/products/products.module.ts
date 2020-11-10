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
import {EditProductDialogComponent} from './edit-product-dialog/edit-product-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ShowBooleanPipe } from './show-boolean.pipe';
import { ShowCategoryPipe } from './product-table/show-category.pipe';

export const productsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, ProductTableComponent, EditProductDialogComponent, EnumToArrayPipe, ShowBooleanPipe, ShowCategoryPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MaterialModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class ProductsModule {
}
