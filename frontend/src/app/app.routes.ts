import { Routes } from '@angular/router';
import { Main } from './layouts/main/main';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Main,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'clientes', pathMatch: 'full' }
        ]
    }
];
