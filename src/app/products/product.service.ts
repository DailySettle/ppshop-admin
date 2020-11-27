import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = environment.SERVER_URL;

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.BASE_URL}/admin/product`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response.data));
  }

  update(product: Product): void {
    const url = `${this.BASE_URL}/product/${product.id}`;
    this.httpClient.put<any>(url, product).subscribe();
  }
}
