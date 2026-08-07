import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { endpoints } from '../../../configurations/environment';
import { RouterLink } from '@angular/router';
import { corDaCategoria } from '../../../utils/categoria-cor';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ConfirmModalComponent
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  // Atributos
  produtos: any[] = [];
  mensagem: string = '';
  produtoIdParaExcluir: string | null = null;
  exibirConfirmacaoExclusao: boolean = false;

  // Exposto para uso no template
  corDaCategoria = corDaCategoria;

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

  // Abre o modal de confirmação de exclusão de produto
  onDelete(id: string) {
    this.produtoIdParaExcluir = id;
    this.exibirConfirmacaoExclusao = true;
  }

  // Função para enviar a requisição de exclusão de produto para a API
  confirmarExclusao() {
    this.exibirConfirmacaoExclusao = false;

    if (!this.produtoIdParaExcluir) {
      return;
    }

    this.http.delete(`${endpoints.produto}/${this.produtoIdParaExcluir}`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.mensagem = data;
          this.onSubmit();
        }
      });

    this.produtoIdParaExcluir = null;
  }

  cancelarExclusao() {
    this.exibirConfirmacaoExclusao = false;
    this.produtoIdParaExcluir = null;
  }
}
