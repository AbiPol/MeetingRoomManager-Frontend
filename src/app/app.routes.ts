import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', title:"Login", loadComponent: () => import('./pages/auth/login/login.component') },
    { path: 'home' ,loadChildren: () => import('./pages/home/home-routing-routing.module') },
    { path: '**', redirectTo: ''  },
];
