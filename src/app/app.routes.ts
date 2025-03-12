import { Routes } from '@angular/router';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'pages/dashboard',
        component: DashboardComponent
    },
    {
        path: 'pages/cadastro-produtos',
        component: CadastroProdutosComponent
    },
    {
        path: 'pages/consulta-produtos',
        component: ConsultaProdutosComponent
    },
    {
        path: 'pages/edicao-produtos',
        component: EdicaoProdutosComponent
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: 'pages/dashboard'
    }
];
