const apiUrl = "http://localhost:8080";

export const endpoints = {
    produto : `${apiUrl}/api/produtos/`,
    consultar_produtos : `${apiUrl}/api/produtos/consultar`,
    consultar_categorias : `${apiUrl}/api/categorias`,
    dashboard_categorias : `${apiUrl}/api/dashboard/produtos-categoria`
};
