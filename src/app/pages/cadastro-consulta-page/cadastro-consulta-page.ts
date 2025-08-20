import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastroConsultaPayload } from '../../models/cadastro-consulta-payload';
import { StatusConsulta } from '../../models/enums/status-consulta-enum';
import { HeaderPattern } from "../../components/headers/header-pattern/header-pattern";

@Component({
  selector: 'app-cadastro-consulta-page',
  imports: [CommonModule, FormsModule, HeaderPattern],
  templateUrl: './cadastro-consulta-page.html',
  styleUrl: './cadastro-consulta-page.css'
})
export class CadastroConsultaPage {
  pacienteId = 123; // ID do paciente logado

  consulta: CadastroConsultaPayload = {
    medico_id: 0,
    paciente_id: this.pacienteId,
    agenda_id: 0,
    observacao: '',
    status: StatusConsulta.Marcada
  };

  medicos = [
    { id: 1, nome: 'Dr. João Silva' },
    { id: 2, nome: 'Dra. Maria Oliveira' }
  ];

  horariosDisponiveis = [
    { id: 101, dia: '2025-08-21', hora: '14:00' },
    { id: 102, dia: '2025-08-22', hora: '10:30' }
  ];

  enviarConsulta() {
    // aqui você chama o service para enviar o payload
    console.log('Consulta enviada:', this.consulta);
  }
}
