import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painel-paciente',
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-paciente.html',
  styleUrl: './painel-paciente.css'
})
export class PainelPaciente {
  mostrarFormulario = false;
  consultaSelecionada: any = null;

  pacienteId = '123'; // ID do paciente logado
  medicos = [
    { id: '1', nome: 'Dr. João Silva' },
    { id: '2', nome: 'Dra. Maria Oliveira' },
  ];
  agendaMedicoSelecionado = ['2025-08-21', '2025-08-22', '2025-08-23'];

  novaConsulta = {
    medicoId: '',
    dia: '',
    observacao: '',
    status: 'MARCADA',
    idPaciente: this.pacienteId,
  };

  consultas = [
    { medico: 'Dr. João Silva', data: '2025-08-19', hora: '14:00', status: 'MARCADA' },
    { medico: 'Dr. João Silva', data: '2025-08-19', hora: '14:00', status: 'MARCADA' },
  ];

  agendarConsulta() {
    alert('Consulta marcada!')
  }

  abrirModal(consulta: any) {
    this.consultaSelecionada = consulta;
  }
}
