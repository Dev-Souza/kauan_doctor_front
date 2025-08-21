import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
import { LoginPayload } from '../../models/login-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout-default',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-layout-default.html',
  styleUrl: './login-layout-default.css'
})
export class LoginLayoutDefault {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  autenticar() {
    if(this.loginForm.valid){
      const payload: LoginPayload = {
        email: this.loginForm.value.email,
        senha: this.loginForm.value.senha
      };

      this.auth.login(payload).subscribe({
        next: (res) => {
          console.log('Login bem-sucedido: ', res);
          // Salvando o id da pessoa que logou
          localStorage.setItem('idLogado', res.idLogado);
          // Salvando token
          localStorage.setItem('token', res.token);
          // Salvando a role para usar-lá no header logado
          localStorage.setItem('role', res.role)
          // Lógica de redirecionamento
          if(res.role == 'ROLE_MEDICO'){
            // Redirecionamento para o médico
            this.router.navigate(['/medico'])
          } else {
            // Redirecionamento para paciente
            this.router.navigate(['/paciente'])
          }
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.errorMessage = "Email ou senha inválidos";
        }
      })
    }
  }
}
