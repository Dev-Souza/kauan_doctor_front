import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarConsultasDeUmMedico {

  constructor(private http: HttpClient) { }

  getConsultasMedicoById(medicoId: number) {
    // Construindo a URL da req
    const apiUrl = `${environment.apiUrl}consultas/medico/${medicoId}`
    // Token
    const token = localStorage.getItem('token');
    // Headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(apiUrl, {headers});
  }
}
