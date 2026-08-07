import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginacao',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './paginacao.component.html',
  styleUrl: './paginacao.component.css'
})
export class PaginacaoComponent {

  // paginaAtual é 0-indexado, espelhando o Pageable do Spring Data
  @Input() paginaAtual: number = 0;
  @Input() totalPaginas: number = 0;
  @Input() totalElementos: number = 0;
  @Input() tamanhoPagina: number = 10;
  @Input() tamanhosDisponiveis: number[] = [10, 20, 50];

  @Output() paginaMudou = new EventEmitter<number>();
  @Output() tamanhoMudou = new EventEmitter<number>();

  irPara(novaPagina: number) {
    if (novaPagina >= 0 && novaPagina < this.totalPaginas) {
      this.paginaMudou.emit(novaPagina);
    }
  }

  onTamanhoChange(novoTamanho: string) {
    this.tamanhoMudou.emit(Number(novoTamanho));
  }
}
