import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BuscarAgendaPeloId {
  constructor(private http: HttpClient) { }

  getAgendaById(agenda_id: number) : Observable<any>{
    // Montando url para req
    const apiUrl = `${environment.apiUrl}agendas/${agenda_id}`;
    // Token
    const token = localStorage.getItem('token');
    // Headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any>(apiUrl, {headers});
  }
}
