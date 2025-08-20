import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HorariosDisponiveis {
  apiUrl = '';

  constructor(private http: HttpClient) {}

  horariosDisponiveis(medicoId: number): Observable<any[]> {
    // Construindo URL de req
    this.apiUrl = `${environment.apiUrl}agendas/diponibilidade/medico/${medicoId}`
    // Token do LocalStorage
    const token = localStorage.getItem('token');
    // Headers para requisição
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(this.apiUrl, {headers});
  }
}
