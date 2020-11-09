import {ProductService} from '../product.service';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../model/product.model';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductTableDatabase {

  productList = new BehaviorSubject<Product[]>([]);

  get data(): Product[] {
    return this.productList.value;
  }

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe((products) => this.productList.next(products));
  }
}
