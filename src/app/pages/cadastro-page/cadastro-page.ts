import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CadastrarService } from '../../services/cadastro/cadastrar-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroPayload } from '../../models/cadastro-payload';
import { HeaderPattern } from "../../components/headers/header-pattern/header-pattern";

@Component({
  selector: 'app-cadastro-page',
  imports: [CommonModule, ReactiveFormsModule, HeaderPattern],
  templateUrl: './cadastro-page.html',
  styleUrl: './cadastro-page.css'
})
export class CadastroPage {
  cadastroForm! : FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private cadastrarService: CadastrarService, private router: Router){
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  cadastrar() {
    if(this.cadastroForm.valid){
      const payload: CadastroPayload = {
        nome: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha
      };

      this.cadastrarService.cadastrar(payload).subscribe({
        next: (res) => {
          console.log('Cadastro efetuado com sucesso: ', res);
          // Redirecionamento
          alert('Cadastro efetuado com sucesso!')
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.error('Erro no cadastro:', err);
          this.errorMessage = "Erro ao cadastrar paciente";
        }
      })
    }
  }
}
