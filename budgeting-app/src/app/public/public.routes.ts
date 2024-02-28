import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const publicRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent,
    },
    {
        path: 'registration', 
        component: RegistrationComponent,
    }
];

export default publicRoutes;