import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Supplier } from 'src/app/models/supplier-management/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private api : string = `${environment.api}`+ "Supplier";

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.api);
  }

  saveSuppliers(suppliers: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.api, suppliers);
  }
}
