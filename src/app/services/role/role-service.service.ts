import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.baseUrl}/roles`)
  }
}
