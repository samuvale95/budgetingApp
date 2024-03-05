import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { PublicEffects } from './store/public.effects';
import { publicFeature } from './store/public.reducer';

export const publicRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent,
        providers:[
            provideState(publicFeature),
            provideEffects(PublicEffects)
        ]
    },
    {
        path: 'registration', 
        component: RegistrationComponent,
        providers:[
            provideState(publicFeature),
            provideEffects(PublicEffects)
        ]
    }
];

export default publicRoutes;