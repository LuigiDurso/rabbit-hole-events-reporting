import { Route } from "@angular/router";

export const eventsRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../pages/events/events.component').then(e => e.EventsComponent),
  }
];
