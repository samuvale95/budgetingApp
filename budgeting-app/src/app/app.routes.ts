import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'public', 
        pathMatch: 'full'
    },
    {
        path: 'public',
        loadChildren: () => import('./public/public.routes').then( m => m.publicRoutes ),
    },
    {
        path: 'private', 
        loadChildren: () => import('./private/private.routes').then( m => m.privateRoutes )
    },
];

export default routes;