import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { endpoints } from '../../../configurations/environment';

@Component({
  selector: 'app-edicao-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-produtos.component.html',
  styleUrl: './edicao-produtos.component.css'
})
export class EdicaoProdutosComponent {

  // Atributos
  id: string = '';
  categorias: any[] = [];
  erros: any = null;
  mensagem: string = '';

  // Construtores
  constructor(
    private http: HttpClient,
    private activated: ActivatedRoute
  ) { }

  // Função executada ao abrir o componente
  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id') as string;

    this.http.get(`${endpoints.produto}${this.id}`)
      .subscribe({
        next: (data: any) => {
          console.log("Produto carregado:", data);
          this.form.controls.nome.setValue(data.nome);
          this.form.controls.preco.setValue(data.preco);
          this.form.controls.quantidade.setValue(data.quantidade);
          this.form.controls.categoriaId.setValue(data.categoria.id);
        }
      });

    this.http.get(endpoints.consultar_categorias)
      .subscribe({
        next: (data) => {
          this.categorias = data as any[];
        }
      });
  }

  form = new FormGroup({
    nome: new FormControl(''),
    preco: new FormControl(''),
    quantidade: new FormControl(''),
    categoriaId: new FormControl('')
  })

  onSubmit() {

    this.http.put(`${endpoints.produto}${this.id}`, this.form.value, { responseType: 'text'})
      .subscribe({
        next: (data) => {
          this.erros = null;
          this.mensagem = data;
        },
        error: (e) => {
          this.erros = JSON.parse(e.error);
          this.mensagem = '';
        }
      });
  }
}
