import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-medico',
  imports: [CommonModule],
  templateUrl: './painel-medico.html',
  styleUrl: './painel-medico.css'
})

export class PainelMedicoComponent {
  agendaDisponivel = [
    { dia: 'Segunda-feira', horas: ['08:00', '09:00', '10:00'] },
    { dia: 'Terça-feira', horas: ['13:00', '14:00'] },
    { dia: 'Quarta-feira', horas: ['08:00', '11:00', '15:00'] },
  ];

  consultas = [
    { paciente: 'João Silva', data: '20/08/2025', hora: '09:00' },
    { paciente: 'Maria Oliveira', data: '21/08/2025', hora: '14:00' },
  ];

  anotacoes: string = '';

  salvarAnotacoes() {
    alert('Anotações salvas com sucesso!');
    console.log('Anotações:', this.anotacoes);
  }
}

