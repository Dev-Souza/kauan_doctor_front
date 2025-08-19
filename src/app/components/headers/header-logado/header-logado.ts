import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-logado',
  imports: [],
  templateUrl: './header-logado.html',
  styleUrl: './header-logado.css'
})
export class HeaderLogado {
  usuario = {
    nome: 'Kauan'
  }
  
  router!: Router
  
  logout() {
    this.router.navigate(['/login'])
  }
}
