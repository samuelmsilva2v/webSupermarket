import { Injectable, computed, signal } from '@angular/core';

type Tema = 'light' | 'dark';

const CHAVE_ARMAZENAMENTO = 'tema';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly tema = signal<Tema>(
    document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light'
  );

  readonly isDark = computed(() => this.tema() === 'dark');

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evento) => {
      if (localStorage.getItem(CHAVE_ARMAZENAMENTO) === null) {
        this.aplicarTema(evento.matches ? 'dark' : 'light', false);
      }
    });
  }

  toggle(): void {
    this.aplicarTema(this.tema() === 'dark' ? 'light' : 'dark', true);
  }

  private aplicarTema(tema: Tema, persistirEscolha: boolean): void {
    this.tema.set(tema);
    document.documentElement.setAttribute('data-bs-theme', tema);

    if (persistirEscolha) {
      localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
    }
  }

}
