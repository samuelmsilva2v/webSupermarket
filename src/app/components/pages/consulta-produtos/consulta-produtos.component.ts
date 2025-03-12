import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  // Atributos
  produtos: any[] = [];
  mensagem: string = '';

  // Construtores
  constructor(private http: HttpClient) { }

  // Formulário para capturar a pesquisa de produtos
  form = new FormGroup({
    nome : new FormControl('')
  });

  // Função para enviar os dados para a API
  onSubmit() {
    this.http.get(`${endpoints.consultar_produtos}/${this.form.value.nome}`)
      .subscribe({
        next: (data) => {
          this.produtos = data as any[];
        }
      })
  }

  // Função para enviar uma requisição de exclusão de produto para a API
  onDelete(id: string){
    if(confirm('Deseja realmente excluir o produto selecionado?')) {
      this.http.delete(`${endpoints.produto}${id}`, { responseType: 'text' })
        .subscribe({
          next: (data) => {
            this.mensagem = data;
            this.onSubmit();
          }
        });
    }
  }
}
