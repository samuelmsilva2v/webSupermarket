import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  // Atributos
  categorias: any[] = [];
  erros: any = null;
  mensagem: string = '';

  // Construtores
  constructor(private http: HttpClient) { }

  // Função executada ao abrir a página
  ngOnInit() {
    this.http.get(endpoints.consultar_categorias)
      .subscribe({
        next: (data) => {
          this.categorias = data as any[];
        }
      });
  }

  // Objeto para capturar os campos do formulário
  form = new FormGroup({
    nome: new FormControl(''),
    preco: new FormControl(''),
    quantidade: new FormControl(''),
    categoriaId: new FormControl('')
  });

  // Função executada ao enviar o formulário
  onSubmit() {
    this.http.post(endpoints.produto, this.form.value, {responseType: 'text'})
      .subscribe({
        next: (data) => {
          this.erros = null;
          this.mensagem = data;
          this.form.reset();
        },
        error: (e) => {
          this.erros = JSON.parse(e.error);
          this.mensagem = '';
        }
      });
  }
}
