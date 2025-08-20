import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroConsultaPayload } from '../../models/cadastro-consulta-payload';
import { StatusConsulta } from '../../models/enums/status-consulta-enum';
import { HeaderPattern } from "../../components/headers/header-pattern/header-pattern";
import { CadastroConsulta } from '../../services/consulta/cadastro-consulta';
import { Router } from '@angular/router';
import { ListarMedicos } from '../../services/medico/listar-medicos';
import { HorariosDisponiveis } from '../../services/agenda/horarios-disponiveis';

@Component({
  selector: 'app-cadastro-consulta-page',
  imports: [CommonModule, FormsModule, HeaderPattern, ReactiveFormsModule],
  templateUrl: './cadastro-consulta-page.html',
  styleUrl: './cadastro-consulta-page.css'
})
export class CadastroConsultaPage {
  cadastroForm!: FormGroup;
  errorMessage: string = '';

  // medicos que irão aparecer no form
  medicos: any[] = [];

  // horarios disponiveis de um médico
  horariosDisponiveis: any[] = [];

  constructor(private fb: FormBuilder, private cadastraConsultaService: CadastroConsulta, private medicoService: ListarMedicos, private agendaService: HorariosDisponiveis, private router: Router) {
    this.cadastroForm = this.fb.group({
      medico_id: ['#', [Validators.required]],
      paciente_id: [this.pacienteId, [Validators.required]],
      agenda_id: [{value: '#', disabled: true}, [Validators.required]],
      observacao: ['', [Validators.required]],
      status: [StatusConsulta.Marcada, [Validators.required]]
    })
  }

  // Pegando Id da pessoa que logou
  pacienteId = localStorage.getItem('idLogado')

  // consultar medicos no backend
  ngOnInit(): void {
    this.medicoService.listarMedicos().subscribe({
      next: (dados) => {
        console.log("Medicos: " + JSON.stringify(dados))
        this.medicos = dados
      },
      error: (err) => console.error('Erro ao buscar médicos: ', err)
    }); // Função para buscar médicos

    this.cadastroForm.get('medico_id')?.valueChanges.subscribe(medicoId => {
      const agendaControl = this.cadastroForm.get('agenda_id');

      if(medicoId && medicoId !== '#') {
        agendaControl?.enable();
        this.agendaService.horariosDisponiveis(medicoId).subscribe({
          next: (dados) => {
            console.log(dados);
            this.horariosDisponiveis = dados
          },
          error: (err) => console.error('Erro ao buscar Horários: ', err)
        }); // Função para buscar horarios disponiveis
      } else {
        agendaControl?.disable();
        agendaControl?.reset({ value: '#', disabled: true});
        this.horariosDisponiveis = []
      }
    })
  }

  cadastrarConsulta() {
    // aqui você chama o service para enviar o payload
    if(this.cadastroForm.valid){
      const payload: CadastroConsultaPayload = {
        medico_id: this.cadastroForm.value.medico_id,
        paciente_id: Number(this.pacienteId),
        agenda_id: this.cadastroForm.value.agenda_id,
        observacao: this.cadastroForm.value.observacao,
        status: StatusConsulta.Marcada
      }

      this.cadastraConsultaService.cadastrarConsulta(payload).subscribe({
        next: (res) => {
          console.log(res)
          alert('Consulta cadastrada com sucesso!');
          this.router.navigate(['/paciente'])
        },
        error: (err) => {
          console.error('Erro no cadastro:', err);
          this.errorMessage = "Erro ao cadastrar consulta";
        }
      })
    }
  }
}
