import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  createComment(userId: number, lodgingId: number, body: Comment): Observable<object> {
    return this.http.post<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/comments`, body, this.httpOptions)
  }

  editComment(userId: number, lodgingId: number, commentId: number, body: object): Observable<object> {
    return this.http.patch<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/comments/${commentId}`, body, this.httpOptions)
  }

  deleteComment(userId: number, lodgingId: number, commentId: number): Observable<object> {
    return this.http.delete<any>(`${environment.baseUrl}/users/${userId}/lodgings/${lodgingId}/comments/${commentId}`)
  }

  listCommentByLodging(lodgingId: number, page: number): Observable<object> {
    return this.http.get<object>(`${environment.baseUrl}/lodgings/${lodgingId}/comments?page=${page}`)
  }
  listCommentByLodgingNoPage(lodgingId: number): Observable<object> {
    return this.http.get<object>(`${environment.baseUrl}/lodgings/${lodgingId}/comments`)
  }
}
