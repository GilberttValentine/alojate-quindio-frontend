import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryServiceService {

  constructor(private http: HttpClient) { }

  uploadImage(body:FormData):Observable<object> {
    return this.http.post(environment.CLOUDINARY_URL, body)
  }
}
