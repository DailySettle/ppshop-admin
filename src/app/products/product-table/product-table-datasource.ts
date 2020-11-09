import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {merge, Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {ProductTableDatabase} from './product-table-database';

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductTableDataSource extends DataSource<Product> {
  paginator: MatPaginator;
  sort: MatSort;

  constructor(public productDB: ProductTableDatabase) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.productDB.productList,
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => this.getPagedData(this.getSortedData(this.productDB.data.slice()))));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    this.productDB.productList.complete();
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]): Product[] {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]): Product[] {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'category':
          return compare(a.category, b.category, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'price':
          return compare(+a.price, +b.price, isAsc);
        case 'quantity':
          return compare(+a.quantity, +b.quantity, isAsc);
        case 'imageUrl':
          return compare(a.imageUrl, b.imageUrl, isAsc);
        case 'newArrive':
          return compare(a.newArrive, b.newArrive, isAsc);
        case 'onSale':
          return compare(a.onSale, b.onSale, isAsc);
        case 'rating':
          return compare(a.rating, b.rating, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | boolean, b: string | number | boolean, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
