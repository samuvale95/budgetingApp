import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { privateFeature } from './store/private.reducer';
import { PrivateEffects } from './store/private.effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PlanningComponent } from './planning/planning.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivateComponent } from './private.component';

export const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        children: [
            {
                path:'dashboard',
                component: DashboardComponent,
                providers:[
                    provideState(privateFeature),
                    provideEffects(PrivateEffects)
                ]
            },
            {
                path:'transactions',
                component: TransactionsComponent,
                providers:[
                    provideState(privateFeature),
                    provideEffects(PrivateEffects)
                ]
            },
            {
                path:'planning',
                component: PlanningComponent,
                providers:[
                    provideState(privateFeature),
                    provideEffects(PrivateEffects)
                ]
            },
            {
                path:'graphs',
                component: GraphsComponent,
                providers:[
                    provideState(privateFeature),
                    provideEffects(PrivateEffects)
                ]
            },
            {
                path:'setting',
                component: SettingsComponent,
                providers:[
                    provideState(privateFeature),
                    provideEffects(PrivateEffects)
                ]
            }
        ]
    }
];
