import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CivilStatus } from 'src/app/models/civilStatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CivilStatusServiceService {

  constructor(private http: HttpClient) { }

  getAllCivilStatus(): Observable<CivilStatus[]> {
    return this.http.get<CivilStatus[]>(`${environment.baseUrl}/civil-status`)
  }
}
