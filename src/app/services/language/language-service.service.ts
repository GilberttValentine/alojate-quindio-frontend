import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Language } from 'src/app/models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor(private http: HttpClient) { }

  getAllLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${environment.baseUrl}/languages`)
  }
}
