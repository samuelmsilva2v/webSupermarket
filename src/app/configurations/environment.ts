export const supermarketApi = "http://localhost:8080";
const  apiLogin = "http://localhost:8081";

export const endpoints = {
    produto : `${supermarketApi}/api/produtos/`,
    consultar_produtos : `${supermarketApi}/api/produtos/consultar`,
    consultar_categorias : `${supermarketApi}/api/categorias`,
    dashboard_categorias : `${supermarketApi}/api/dashboard/produtos-categoria`,
    autenticar_usuario : `${apiLogin}/api/usuario/autenticar`,
    criar_usuario : `${apiLogin}/api/usuario/criar`
};
