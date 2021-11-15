import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  login(body: { email: string, password: string }): Observable<string> {
    return this.http.post<string>(`${environment.baseUrl}/security/login`, body, this.httpOptions)
  }

  validateToken(body: { token: string }): Observable<object> {
    return this.http.post<object>(`${environment.baseUrl}/security/validate-token`, body, this.httpOptions)
  }
}
