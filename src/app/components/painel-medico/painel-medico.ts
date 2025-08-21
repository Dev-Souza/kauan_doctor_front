import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HorariosDisponiveis } from '../../services/agenda/horarios-disponiveis';
import { BuscarConsultasDeUmMedico } from '../../services/consulta/buscar-consultas-de-um-medico';
import { BuscarPacientePeloId } from '../../services/paciente/buscar-paciente-pelo-id';
import { BuscarAgendaPeloId } from '../../services/agenda/buscar-agenda-pelo-id';

@Component({
  selector: 'app-painel-medico',
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-medico.html',
  styleUrl: './painel-medico.css'
})
export class PainelMedicoComponent {
  agendaDisponivel: any[] = [];
  agendaAgrupada: { dataAgenda: string, horarios: string[] }[] = [];

  consultas: any[] = [];

  // Consultas já com todos os dados
  consultasCompletas: any[] = [];

  // Pegando id do médico
  idMedicoLogado = localStorage.getItem('idLogado');

  constructor(
    private agendaService: HorariosDisponiveis,
    private agendaServiceGetById: BuscarAgendaPeloId,
    private consultaService: BuscarConsultasDeUmMedico,
    private pacienteService: BuscarPacientePeloId
  ) { }

  ngOnInit(): void {
    this.agendaService.horariosDisponiveis(Number(this.idMedicoLogado)).subscribe({
      next: (dados) => {
        this.agendaDisponivel = dados;
        this.agendaAgrupada = this.agruparPorData(dados);
      },
      error: (err) => console.error('Erro ao buscar Horários: ', err)
    });

    this.consultaService.getConsultasMedicoById(Number(this.idMedicoLogado)).subscribe({
      next: (dados) => {
        this.consultas = dados;
        this.carregarDadosCompletos(this.consultas);
      },
      error: (err) => console.error('Erro ao buscar consultas: ', err)
    });
  }

  agruparPorData(agenda: any[]): { dataAgenda: string, horarios: string[] }[] {
    const mapa = new Map<string, string[]>();

    for (const item of agenda) {
      const data = item.dataAgenda;
      const hora = item.horaInicio;

      if (!mapa.has(data)) {
        mapa.set(data, []);
      }

      mapa.get(data)!.push(hora);
    }

    return Array.from(mapa.entries()).map(([dataAgenda, horarios]) => ({
      dataAgenda,
      horarios
    }));
  }


  carregarDadosCompletos(consultas: any[]) {
    this.consultasCompletas = [];

    consultas.forEach(consulta => {
      const paciente$ = this.pacienteService.getPacienteById(consulta.paciente_id);
      const agenda$ = this.agendaServiceGetById.getAgendaById(consulta.agenda_id);

      // Combina as duas chamadas
      paciente$.subscribe(paciente => {
        agenda$.subscribe(agenda => {
          this.consultasCompletas.push({
            paciente,
            agenda,
            observacoes: consulta.observacoes,
            status: consulta.status
          });
        });
      });
    });
  }

}