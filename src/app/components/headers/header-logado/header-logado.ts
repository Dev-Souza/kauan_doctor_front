import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarPacientePeloId } from '../../../services/paciente/buscar-paciente-pelo-id';
import { BuscarMedicoPeloId } from '../../../services/medico/buscar-medico-pelo-id';

@Component({
  selector: 'app-header-logado',
  imports: [],
  templateUrl: './header-logado.html',
  styleUrl: './header-logado.css'
})
export class HeaderLogado {
  constructor(private pacienteService: BuscarPacientePeloId, private medicoService: BuscarMedicoPeloId, private router: Router) { }
  usuario = ''

  ngOnInit(): void {
    // Pegando role do user Logado
    const role = localStorage.getItem('role');
    // Pegado id do user logado
    const idLogado = localStorage.getItem('idLogado');
    if(role == 'ROLE_MEDICO'){
      this.medicoService.getMedicoById(Number(idLogado)).subscribe({
        next: (dados) => this.usuario = dados.nome,
        error: (err) => console.error('Erro ao buscar médico: ', err)
      })
    }else{
      this.pacienteService.getPacienteById(Number(idLogado)).subscribe({
        next: (dados) => this.usuario = dados.nome,
        error: (err) => console.error('Erro ao buscar paciente: ', err)
      })
    }
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
