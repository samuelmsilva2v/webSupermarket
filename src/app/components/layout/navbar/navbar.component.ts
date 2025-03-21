import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Atributos
  isAuthenticated: boolean = false;
  nome: string = '';
  email: string = '';
  perfil: string = '';

  // Evento executado ao abrir o componente
  ngOnInit() {

    // Verificar se os dados do usuário estão gravados na session storage
    if(sessionStorage.getItem('usuario') != null) {
      this.isAuthenticated = true;

      // Ler os dados do usuário
      var data = sessionStorage.getItem('usuario') as string;
      var json = JSON.parse(data);

      this.nome = json.nome;
      this.email = json.email;
      this.perfil = json.perfil;
    }
  }

  logout() {
    if(window.confirm('Deseja realmente sair do sistema?')) {
      sessionStorage.removeItem('usuario');
      location.href = '/pages/autenticar-usuario';
    }
  }


}
