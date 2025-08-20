import { Component } from '@angular/core';
import { HeaderLogado } from "../../components/headers/header-logado/header-logado";
import { PainelMedicoComponent } from "../../components/painel-medico/painel-medico";
import { PainelPaciente } from "../../components/painel-paciente/painel-paciente";

@Component({
  selector: 'app-paciente-page',
  imports: [HeaderLogado, PainelPaciente],
  templateUrl: './paciente-page.html',
  styleUrl: './paciente-page.css'
})
export class PacientePage {

}
