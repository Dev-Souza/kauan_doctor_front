import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroConsultaPayload } from '../../models/cadastro-consulta-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroConsulta {
  private apiUrl = `${environment.apiUrl}consultas`;

  constructor(private http: HttpClient) { }


  // Fazendo a requisição
  cadastrarConsulta(payload: CadastroConsultaPayload): Observable<any> {
    // token
    const token = localStorage.getItem('token');

    // headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(this.apiUrl, payload, {headers});
  }
}
