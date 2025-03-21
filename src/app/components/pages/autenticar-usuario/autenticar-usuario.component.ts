import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {

  // Atributos
  mensagem: string = '';
  erros: any = null;

  // Construtores
  constructor(private http: HttpClient) { }

  // Estrutura do formulário
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Função para capturar o evento SUBMIT do formulário
  onSubmit() {

    this.mensagem = '';
    this.erros = null;
    
    this.http.post(endpoints.autenticar_usuario, this.form.value)
      .subscribe({
        next: (data: any) => {
          sessionStorage.setItem('usuario', JSON.stringify(data));
          location.href = '/pages/dashboard';
        },
        error: (e) => {
          if(typeof e.error === "string") {              
            this.mensagem = e.error;
          }
          else {
            this.erros = e.error;              
          }
        }
      });
  }
}
