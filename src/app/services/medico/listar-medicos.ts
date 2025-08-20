import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarMedicos {
  apiUrl = `${environment.apiUrl}medicos`;

  constructor(private http: HttpClient) {}

  // Requisição
  listarMedicos() : Observable<any[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(this.apiUrl, {headers});
  }
}
