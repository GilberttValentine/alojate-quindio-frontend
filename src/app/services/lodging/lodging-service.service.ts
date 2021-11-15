import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Lodging } from 'src/app/models/lodging';

@Injectable({
  providedIn: 'root'
})
export class LodgingServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  createLodging(userId: number, body: Lodging): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/users/${userId}/lodgings`, body, this.httpOptions)
  }

  getAllLodgings(): Observable<Lodging[]> {
    return this.http.get<Lodging[]>(`${environment.baseUrl}/lodgings`)
  }

  getLodging(lodgingId: number): Observable<Lodging> {
    return this.http.get<Lodging>(`${environment.baseUrl}/lodgings/${lodgingId}`)
  }

  deactivateLodging(userId: number, lodgingId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/deactivate`, [], this.httpOptions)
  }

  activateLodging(userId: number, lodgingId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/activate`, [], this.httpOptions)
  }
}
