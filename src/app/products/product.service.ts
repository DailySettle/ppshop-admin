import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = environment.SERVER_URL;

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.BASE_URL}/product/all`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response.data));
  }
}
