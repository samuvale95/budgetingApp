import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { privateFeature } from './store/private.reducer';
import { PrivateEffects } from './store/private.effects';
import { CustomSelectButtonComponent } from './components/custom-select/custom-select.component';

export const privateRoutes: Routes = [
    {
        path:'component',
        component: CustomSelectButtonComponent,
        providers:[
            provideState(privateFeature),
            provideEffects(PrivateEffects)
        ]
    }
];
