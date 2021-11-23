import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { CreateReservationResponse } from 'src/app/models/response/createReservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  createReservation(userId: number, lodgingId: number, body: CreateReservationResponse): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/reservations`, body, this.httpOptions)
  }

  validateLodgingDisponibility(lodgingId: number, body: object): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/lodgings/${lodgingId}/check-valid-dates`, body, this.httpOptions)
  }

  cancelReservation(userId: number, reservationId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/reservations/${reservationId}/cancel`, [], this.httpOptions)
  }

  findReservation(userId: number, reservationId: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${environment.baseUrl}/users/${userId}/reservations/${reservationId}`)
  }

  listReservationsByUser(userId: number, body: object): Observable<object> {
    return this.http.get<any>(`${environment.baseUrl}/users/${userId}/reservations`, body)
  }

  listReservationsByLodging(userId: number, lodgingId: number, body: object): Observable<object> {
    return this.http.get<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/reservations`, body)
  }
}
