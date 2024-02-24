import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const publicRoutes: Routes = [
    {
        path:'',
        component: PublicComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {
                path: 'login', 
                loadComponent: () => import('./login/login.component').then( c => c.LoginComponent)
            },
            {
                path: 'registration', 
                loadComponent: () => import('./registration/registration.component').then( c => c.RegistrationComponent)
            }
        ]
    }
];
