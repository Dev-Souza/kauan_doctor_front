import { Component } from '@angular/core';
import { HeaderPattern } from "../../components/headers/header-pattern/header-pattern";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastrarAgendaService } from '../../services/agenda/cadastrar-agenda-service';
import { Router } from '@angular/router';
import { CadastroAgendaPayload } from '../../models/cadastro-agenda-payload';

@Component({
  selector: 'app-cadastro-agenda-page',
  imports: [HeaderPattern, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-agenda-page.html',
  styleUrl: './cadastro-agenda-page.css'
})
export class CadastroAgendaPage {
  cadastroForm!: FormGroup;
  errorMessage: string = '';

  // ID do médico que esta no localStorage
  medicoId = localStorage.getItem('idLogado');

  constructor(private fb: FormBuilder, private cadastraAgendaService: CadastrarAgendaService, private router: Router){
    this.cadastroForm = this.fb.group({
      dataAgenda: ['', [Validators.required]], 
      horaInicio: ['', [Validators.required]],
      horaFim: ['', [Validators.required]],
      disponivel: [true, [Validators.required]],
      statusAgenda: ['LIVRE', [Validators.required]],
      medico_id: [this.medicoId, [Validators.required]]
    })
  }
 
  cadastrarHorarioAgenda() {
    // Chamo a service para enviar o payload
    if(this.cadastroForm.valid){
      const payload: CadastroAgendaPayload = {
        dataAgenda: this.cadastroForm.value.dataAgenda,
        horaInicio: this.cadastroForm.value.horaInicio,
        horaFim: this.cadastroForm.value.horaFim,
        disponivel: this.cadastroForm.value.disponivel,
        statusAgenda: this.cadastroForm.value.statusAgenda,
        medico_id: Number(this.medicoId)
      }

      this.cadastraAgendaService.cadastrarAgendaMedica(payload).subscribe({
        next: (res) => {
          alert("Agenda cadastrada com sucesso!")
          this.router.navigate(['/medico'])
        },
        error: (err) => {
          console.error('Erro no cadastro: ', err);
          this.errorMessage = "Erro ao cadastrar consulta";
        }
      })
    }
  }
}
