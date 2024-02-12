import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product-management/product';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api : string = `${environment.api}`+ "Product";

  constructor(private http: HttpClient) { }

  saveProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, Product);
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
}
