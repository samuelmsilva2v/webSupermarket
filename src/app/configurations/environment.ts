export const supermarketApi = "http://localhost:8080";

export const endpoints = {
    produto : `${supermarketApi}/api/produtos`,
    consultar_produtos : `${supermarketApi}/api/produtos/consultar`,
    consultar_categorias : `${supermarketApi}/api/categorias`,
    dashboard_categorias : `${supermarketApi}/api/dashboard/produtos-categoria`,
    autenticar_usuario : `${supermarketApi}/api/usuario/autenticar`,
    criar_usuario : `${supermarketApi}/api/usuario/criar`
};
