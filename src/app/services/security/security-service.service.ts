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

  login(body: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/security/login`, body, this.httpOptions)
  }

  validateToken(body: { token: string }): Observable<object> {
    return this.http.post<object>(`${environment.baseUrl}/security/validate-token`, body, this.httpOptions)
  }

  adminAuth(): boolean {
    if (localStorage.getItem('role') === '5') return true
    else return false
  }

  hostAuth(): boolean {
    if (localStorage.getItem('role') === '2') return true
    else return false
  }

  guestAuth(): boolean {
    if (localStorage.getItem('role') === '3') return true
    else return false
  }

  mixAuth(): boolean {
    if (localStorage.getItem('role') === '4') return true
    else return false
  }

  userAuth(): boolean {
    if (localStorage.getItem('role') === '5') return true
    else return false
  }
}
