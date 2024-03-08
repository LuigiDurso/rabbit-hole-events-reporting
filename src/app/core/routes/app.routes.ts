import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('../pages/root/app.component').then(h => h.AppComponent),
        loadChildren: () => import('../../events/route/events.routes').then(mod => mod.eventsRoutes),
    }
];
