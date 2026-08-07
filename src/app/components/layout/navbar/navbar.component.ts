import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule,
    ConfirmModalComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  nome: string = '';
  email: string = '';
  perfil: string = '';
  exibirConfirmacaoLogout: boolean = false;

  ngOnInit() {
    if(sessionStorage.getItem('usuario') != null) {
      this.isAuthenticated = true;

      var data = sessionStorage.getItem('usuario') as string;
      var json = JSON.parse(data);

      this.nome = json.nome;
      this.email = json.email;
      this.perfil = json.perfil;
      this.isAdmin = json.perfil === 'Administrador';
    }
  }

  logout() {
    this.exibirConfirmacaoLogout = true;
  }

  confirmarLogout() {
    this.exibirConfirmacaoLogout = false;
    sessionStorage.removeItem('usuario');
    location.href = '/pages/autenticar-usuario';
  }

  cancelarLogout() {
    this.exibirConfirmacaoLogout = false;
  }

}
