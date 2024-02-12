import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch, IBranch } from 'src/app/models/branch-management/branch';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private api : string = `${environment.api}`+ "Branchers";

  constructor(private http: HttpClient) { }

  getBranches(){
    return this.http.get<IBranch[]>(this.api);
  }
  
}
