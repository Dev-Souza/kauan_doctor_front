import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
import { LoginPayload } from '../../models/login-payload';

@Component({
  selector: 'app-login-layout-default',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-layout-default.html',
  styleUrl: './login-layout-default.css'
})
export class LoginLayoutDefault {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private auth: Auth) {
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
          // Fazer lógica de redirecionamento
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.errorMessage = "Email ou senha inválidos";
        }
      })
    }
  }
}
