import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  createUser(body: User): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/users`, body, this.httpOptions)
  }

  createHost(userId: number, body: User): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/hosts`, body, this.httpOptions)
  }

  createGuest(userId: number, body: User): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/guests`, body, this.httpOptions)
  }

  updateUser(userId: number, body: User): Observable<object> {
    return this.http.put<any>(`${environment.baseUrl}/users/${userId}`, body, this.httpOptions)
  }

  updateHost(userId: number, body: { languagesId: number[] }): Observable<object> {
    return this.http.put<any>(`${environment.baseUrl}/users/${userId}/hosts`, body, this.httpOptions)
  }

  updateGuest(userId: number, body: User): Observable<object> {
    return this.http.put<any>(`${environment.baseUrl}/users/${userId}/guests`, body, this.httpOptions)
  }

  activateUser(userId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/activate`, [], this.httpOptions)
  }

  deactivateUser(userId: number): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/deactivate`, [], this.httpOptions)
  }

  findUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/users/${userId}`)
  }

  findAllUsers(userId: number): Observable<object> {
    return this.http.get<any>(`${environment.baseUrl}/users/${userId}/deactivate`)
  }
}
