import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { Lodging } from 'src/app/models/lodging';
import { CreateLodgingResponse } from 'src/app/models/response/createLodging';

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

  createLodging(userId: number, body: CreateLodgingResponse): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/users/${userId}/lodgings`, body, this.httpOptions)
  }

  updateLodging(userId: number, lodgingId: number, body: CreateLodgingResponse): Observable<object> {
    return this.http.put<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}`, body, this.httpOptions)
  }

  getAllLodgings(): Observable<LodgingResponse[]> {
    return this.http.get<LodgingResponse[]>(`${environment.baseUrl}/lodgings`)
  }

  getLodging(lodgingId: number): Observable<LodgingResponse> {
    return this.http.get<LodgingResponse>(`${environment.baseUrl}/lodgings/${lodgingId}`);
  }

  deactivateLodging(userId: number, lodgingId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/deactivate`, [], this.httpOptions)
  }

  activateLodging(userId: number, lodgingId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/activate`, [], this.httpOptions)
  }
}
