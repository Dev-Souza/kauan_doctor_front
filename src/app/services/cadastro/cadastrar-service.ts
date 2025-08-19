import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { CadastroPayload } from '../../models/cadastro-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  private apiUrl = `${environment.apiUrl}pacientes`;

  constructor(private http: HttpClient) { }

  // Aqui eu faço a requisição mandando a Url e o payload
  cadastrar(payload: CadastroPayload) : Observable<any> {
    return this.http.post(this.apiUrl, payload, {
      withCredentials: true
    });
  }
}
