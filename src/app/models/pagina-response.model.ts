// Formato de resposta paginada devolvido pelo backend (PaginaResponseDto<T>),
// usado por qualquer listagem que consulte via <app-paginacao>.
export interface PaginaResponse<T> {
    conteudo: T[];
    paginaAtual: number;
    tamanhoPagina: number;
    totalElementos: number;
    totalPaginas: number;
}
