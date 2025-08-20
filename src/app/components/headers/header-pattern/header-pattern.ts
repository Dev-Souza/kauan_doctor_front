import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-pattern',
  imports: [],
  templateUrl: './header-pattern.html',
  styleUrl: './header-pattern.css'
})
export class HeaderPattern {
  constructor(private location: Location) { }

  voltar() {
    this.location.back(); // volta para a página anterior
  }

}
