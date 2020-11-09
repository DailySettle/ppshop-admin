import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ProductTableDataSource} from './product-table-datasource';
import {Product} from '../model/product.model';
import {ProductTableDatabase} from './product-table-database';
import {MatDialog} from '@angular/material/dialog';
import {EditProductDialogComponent} from '../edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductTableDataSource;

  displayedColumns = ['name', 'category', 'description', 'price', 'quantity', 'imageUrl', 'newArrive', 'onSale', 'rating', 'action'];

  constructor(private productDB: ProductTableDatabase,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new ProductTableDataSource(this.productDB);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  edit(product: Product): void {
    this.dialog.open(EditProductDialogComponent, {
      data: product
    });
  }
}
