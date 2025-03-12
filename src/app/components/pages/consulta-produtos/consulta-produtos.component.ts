import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  // Atributos
  produtos: any[] = [];

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

}
