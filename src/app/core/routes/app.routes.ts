import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('../../events/route/events.routes').then(mod => mod.eventsRoutes),
    }
];
