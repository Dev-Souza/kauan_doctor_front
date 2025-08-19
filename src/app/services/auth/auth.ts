import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../../models/login-payload';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient) { }

  // Aqui eu faço a requisição mandando a Url e o payload
  login(payload: LoginPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
