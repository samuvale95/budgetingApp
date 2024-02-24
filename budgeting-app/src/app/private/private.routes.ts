import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

export const privateRoutes: Routes = [
    {
        path:'',
        component: PrivateComponent,
        children: [
        ]
    }
];
