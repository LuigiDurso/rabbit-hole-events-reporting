import { Route } from "@angular/router";

export const eventsRoutes: Route[] = [
  {
    path: 'events',
    loadComponent: () => import('../pages/events/events.component').then(e => e.EventsComponent),
  }
];
