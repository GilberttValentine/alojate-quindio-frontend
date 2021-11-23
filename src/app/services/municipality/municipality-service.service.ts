import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MunicipalityResponse } from 'src/app/models/response/municipalityResponse';
import { Municipality } from 'src/app/models/municipality';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityServiceService {

  constructor(private http: HttpClient) { }

  getAllMunicipalities(): Observable<MunicipalityResponse[]> {
    return this.http.get<MunicipalityResponse[]>(`${environment.baseUrl}/municipalities`)
  }

  getMunicipalityById(id: number): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(`${environment.baseUrl}/municipalities/${id}`)
  }
}
