import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'rabbit-hole-events-reporting-footer',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, TranslateModule ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
