import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment';
import { CompetencesCrudComponent } from 'src/app/competences-crud/competences-crud.component';
import { CompetencesComponent } from 'src/app/competences/competences.component';
import { Observable } from 'rxjs';
import { Competences } from '../model/competences';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }
  public getCompetences() : Observable<Competences[]>{
    return this.http.get<Competences[]>(environment.apiUrl+ 'competences')
  }
  public getOneCompetences(id: number): Observable<Competences> {
    return this.http.get<Competences>(environment.apiUrl + 'competences/' + id);
} 
// trier par type
public getEndDate(): Observable<Competences[]> {
  return this.http.get<Competences[]>(environment.apiUrl + 'competences/type');
}
public deleteCompetences(id: number): Observable<any> {
  return this.http.delete<any>(environment.apiUrl + 'competences/' + id);
}
// methodes de crud
public postCompetences(formData: FormData): Observable<Competences> {
  return this.http.post<Competences>(environment.apiUrl + 'competences/', formData);
}

public updatCompetences(formData: FormData, id: number): Observable<Competences> {
  return this.http.put<Competences>(environment.apiUrl + 'competences/' + id, formData);
}





} 
