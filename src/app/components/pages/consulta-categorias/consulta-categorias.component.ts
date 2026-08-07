import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { endpoints } from '../../../configurations/environment';
import { corDaCategoria } from '../../../utils/categoria-cor';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-consulta-categorias',
  imports: [
    CommonModule,
    RouterLink,
    ConfirmModalComponent
  ],
  templateUrl: './consulta-categorias.component.html',
  styleUrl: './consulta-categorias.component.css'
})
export class ConsultaCategoriasComponent {

  // Atributos
  categorias: any[] = [];
  mensagem: string = '';
  erroExclusao: string = '';
  categoriaIdParaExcluir: string | null = null;
  exibirConfirmacaoExclusao: boolean = false;

  // Exposto para uso no template
  corDaCategoria = corDaCategoria;

  // Construtores
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarCategorias();
  }

  carregarCategorias() {
    this.http.get(endpoints.categoria)
      .subscribe({
        next: (data) => {
          this.categorias = data as any[];
        }
      });
  }

  // Abre o modal de confirmação de exclusão de categoria
  onDelete(id: string) {
    this.categoriaIdParaExcluir = id;
    this.exibirConfirmacaoExclusao = true;
  }

  // Função para enviar a requisição de exclusão de categoria para a API
  confirmarExclusao() {
    this.exibirConfirmacaoExclusao = false;

    if (!this.categoriaIdParaExcluir) {
      return;
    }

    this.http.delete(`${endpoints.categoria}/${this.categoriaIdParaExcluir}`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.mensagem = data;
          this.erroExclusao = '';
          this.carregarCategorias();
        },
        error: (e) => {
          this.mensagem = '';
          this.erroExclusao = typeof e.error === 'string' ? e.error : 'Não foi possível excluir a categoria.';
        }
      });

    this.categoriaIdParaExcluir = null;
  }

  cancelarExclusao() {
    this.exibirConfirmacaoExclusao = false;
    this.categoriaIdParaExcluir = null;
  }
}
