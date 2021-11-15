import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  createReservation(body: Service): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/services`, body, this.httpOptions)
  }

  findAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${environment.baseUrl}/services`)
  }
}
