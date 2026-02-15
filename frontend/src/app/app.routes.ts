import { Routes } from '@angular/router';
import { Main } from './layouts/main/main';
import { authGuard } from './core/guards/auth-guard';
import { Videoplayer } from './features/videoplayer/pages/videoplayer/videoplayer';

export const routes: Routes = [
    {
        path: '',
        component: Main,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'videoplayer', pathMatch: 'full' },
            {                 
                path: 'videoplayer',
                component: Videoplayer
            }
        ]
    }
];
