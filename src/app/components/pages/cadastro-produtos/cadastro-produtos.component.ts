import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [CommonModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  // Atributos
  categorias: any[] = [];

  // Construtores
  constructor(private http: HttpClient) { }

  // Função executada ao abrir a página
  ngOnInit() {
    this.http.get('http://localhost:8080/api/categorias')
      .subscribe({
        next: (data) => {
          this.categorias = data as any[];
        }
      });
  }
}
