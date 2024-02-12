import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { Branch } from 'src/app/models/branch-management/branch';
import { Category } from 'src/app/models/product-management/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api : string = `${environment.api}`+ "categories";

  constructor(private http: HttpClient) { }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.api, category);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api);
  }
}
