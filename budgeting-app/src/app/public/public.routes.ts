import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const publicRoutes: Routes = [
    {
        path:'',
        component: PublicComponent,
        children: [
            {
                path: 'login', 
                component: LoginComponent,
            },
            {
                path: 'registration', 
                component: RegistrationComponent,
            }
        ]
    }
];

export default publicRoutes;