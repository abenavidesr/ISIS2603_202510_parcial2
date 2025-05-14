import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatos } from './candidatos';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private apiUrl = environment.baseUrl

constructor(private http: HttpClient) { }

getCandidatos(): Observable<Candidatos[]>{
  return this.http.get<Candidatos[]>(this.apiUrl +'candidates.json')
}

getCandidato(id: number): Observable<Candidatos>{
  return this.http.get<Candidatos>(this.apiUrl+  id +'/candidates.json')
}

}
