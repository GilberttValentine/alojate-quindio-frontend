import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeLodging } from 'src/app/models/typeLodging';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeLodgingServiceService {

  constructor(private http: HttpClient) { }

  getAllTypeLodging(): Observable<TypeLodging[]> {
    return this.http.get<TypeLodging[]>(`${environment.baseUrl}/type-lodging`)
  }

  getLodgingTypeById(id: number): Observable<TypeLodging[]> {
    return this.http.get<TypeLodging[]>(`${environment.baseUrl}/type-lodging/${id}`)
  }
}
