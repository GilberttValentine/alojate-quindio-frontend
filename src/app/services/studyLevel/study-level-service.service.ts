import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudyLevel } from 'src/app/models/studyLevel';
@Injectable({
  providedIn: 'root'
})
export class StudyLevelServiceService {

  constructor(private http: HttpClient) { }

  getAllCivilStatus(): Observable<StudyLevel[]> {
    return this.http.get<StudyLevel[]>(`${environment.baseUrl}/study-levels`)
  }
}
