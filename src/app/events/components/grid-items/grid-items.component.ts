import {
  ChangeDetectionStrategy,
  Component, input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from "../grid-item/grid-item.component";
import { GritItemModel } from "../../models/grit-item.model";

@Component({
  selector: 'rabbit-hole-events-reporting-grid-items',
  standalone: true,
  imports: [ CommonModule, GridItemComponent ],
  templateUrl: './grid-items.component.html',
  styleUrl: './grid-items.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemsComponent {
  items= input.required<GritItemModel[]>();
}
