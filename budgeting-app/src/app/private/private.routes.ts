import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HorizontalBarsComponent } from '../shared/components/horizontal-bars/horizontal-bars.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { privateFeature } from './store/private.reducer';
import { PrivateEffects } from './store/private.effects';

export const privateRoutes: Routes = [
    {
        path:'component',
        component: HorizontalBarsComponent,
        providers:[
            provideState(privateFeature),
            provideEffects(PrivateEffects)
        ]
    }
];
