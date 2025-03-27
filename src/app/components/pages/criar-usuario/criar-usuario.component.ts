import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';

@Component({
  selector: 'app-criar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {

  // Atributos
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  erros: any = null;

  // Construtores
  constructor(private http: HttpClient) { }

  form = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    senhaConfirmacao: new FormControl('')
  });

  onSubmit() {
    this.mensagemSucesso = '';
    this.mensagemErro = '';
    this.erros = null;

    if(this.form.value.senha == this.form.value.senhaConfirmacao) {
      this.http.post(endpoints.criar_usuario, this.form.value)
        .subscribe({
          next: (data: any) => {
            this.mensagemSucesso = `Parabéns, ${data.nome}. Sua conta foi criada com sucesso.`
            this.form.reset();
          },
          error: (e) => {
            if(typeof e.error === "string") {
              this.mensagemErro = e.error;
            } else {
              this.erros = e.error;
            }
          }
        });
    } else {
      this.mensagemErro = "Senhas não conferem, por favor verifique."
    }
  }
}
