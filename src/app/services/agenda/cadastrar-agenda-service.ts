import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroAgendaPayload } from '../../models/cadastro-agenda-payload';

@Injectable({
  providedIn: 'root'
})
export class CadastrarAgendaService {
  // Construindo URL de req
  apiUrl = `${environment.apiUrl}agendas`

  constructor(private http: HttpClient) {}

  cadastrarAgendaMedica(payload: CadastroAgendaPayload): Observable<any> {
    // Token
    const token = localStorage.getItem('token');
    // Headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    // Mandando cabeçalho e payload
    return this.http.post(this.apiUrl, payload, {headers})
  }
}
