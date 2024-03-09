import {
  ChangeDetectionStrategy,
  Component, input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GritItemModel } from '../../models/grit-item.model';

@Component({
  selector: 'rabbit-hole-events-reporting-grid-item',
  standalone: true,
    imports: [ CommonModule, NgOptimizedImage ],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  item = input.required<GritItemModel>();
}
