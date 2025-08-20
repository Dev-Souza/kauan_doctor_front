import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { MedicoPage } from './pages/medico-page/medico-page';
import { PacientePage } from './pages/paciente-page/paciente-page';
import { CadastroPage } from './pages/cadastro-page/cadastro-page';
import { CadastroConsultaPage } from './pages/cadastro-consulta-page/cadastro-consulta-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'medico', component: MedicoPage },
    { path: 'paciente', component: PacientePage },
    { path: 'cadastro', component: CadastroPage },
    { path: 'consulta', component: CadastroConsultaPage }
];
