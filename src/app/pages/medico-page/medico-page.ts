import { Component } from '@angular/core';
import { HeaderLogado } from "../../components/headers/header-logado/header-logado";
import { PainelMedicoComponent } from "../../components/painel-medico/painel-medico";

@Component({
  selector: 'app-medico-page',
  imports: [HeaderLogado, PainelMedicoComponent],
  templateUrl: './medico-page.html',
  styleUrl: './medico-page.css'
})
export class MedicoPage {

}
