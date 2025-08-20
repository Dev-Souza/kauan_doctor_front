import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-logado',
  imports: [],
  templateUrl: './header-logado.html',
  styleUrl: './header-logado.css'
})
export class HeaderLogado {
  constructor(private router: Router){}
  
  usuario = {
    nome: 'Kauan'
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
