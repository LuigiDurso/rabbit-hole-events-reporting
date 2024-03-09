import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { EventModel } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  httpClient: HttpClient = inject(HttpClient);

  getEvents(): Observable<EventModel[]> {
    return of([{
      name: 'Aspettando San Patrizio',
      date: '16/03/2024',
      description: 'Festa dedicata alla birra e al santo patrono d\'Irlanda',
      imageUrl: 'https://i.pinimg.com/474x/dc/1f/28/dc1f288dbef60d627bc442419b35edc4.jpg'
    }]);
  }
}
