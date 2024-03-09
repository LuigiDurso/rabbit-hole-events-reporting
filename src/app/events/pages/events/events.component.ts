import {
  ChangeDetectionStrategy,
  Component, inject, OnInit, signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemsComponent } from "../../components/grid-items/grid-items.component";
import { EventsService } from '../../services/events.service';
import { EventModel } from "../../models/event.model";

@Component({
  selector: 'rabbit-hole-events-reporting-events',
  standalone: true,
  imports: [ CommonModule, GridItemsComponent ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent implements OnInit {
  events = [] as EventModel[];

  eventsService = inject(EventsService);

  ngOnInit() {
    this.eventsService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
}
