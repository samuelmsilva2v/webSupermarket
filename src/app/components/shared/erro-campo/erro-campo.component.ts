import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-erro-campo',
  imports: [
    CommonModule
  ],
  templateUrl: './erro-campo.component.html',
  styleUrl: './erro-campo.component.css'
})
export class ErroCampoComponent {

  // O campo do formulário reativo a ser validado
  @Input() controle: FormControl | null = null;

  // Mapa entre a chave do erro do Angular (required, min, maxlength, etc.) e a mensagem a ser exibida
  @Input() mensagens: Record<string, string> = {};

  // Mensagem vinda da API (backend), exibida quando não há erro de validação local pendente
  @Input() erroServidor: string | null = '';

  // Escolhe a mensagem a ser exibida: erro de validação local tem prioridade sobre o erro do servidor
  get mensagem(): string | null {

    if (this.controle && this.controle.invalid && (this.controle.touched || this.controle.dirty)) {
      const chaveErro = Object.keys(this.controle.errors ?? {})[0];
      return chaveErro ? (this.mensagens[chaveErro] ?? null) : null;
    }

    return this.erroServidor ?? null;
  }
}
