import { Route } from '@angular/router';
import { eventsRoutes } from "../../events/route/events.routes";

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
    },
    ...eventsRoutes
];
