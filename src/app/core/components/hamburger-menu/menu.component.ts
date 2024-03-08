import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input, Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarMenuItem } from "../../models/sidebar-menu-item";
import { TranslateModule } from "@ngx-translate/core";
import { AppShadowOverlayService } from "../../services/app-shadow-overlay/app-shadow-overlay.service";

@Component({
  selector: 'rabbit-hole-events-reporting-hamburger-menu',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, TranslateModule ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() menuItems: SidebarMenuItem[] = [];

  isMenuOpen = false;

  @Output() menuItemSelected = new EventEmitter<SidebarMenuItem>();

  constructor(
    private readonly appShadowOverlayService: AppShadowOverlayService
  ) {}

  onMenuIconClicked() {
    this.isMenuOpen = !this.isMenuOpen;
    this.appShadowOverlayService.overlayShadowSignal.set(this.isMenuOpen);
  }

  selectMenuItem( item: SidebarMenuItem, closeMenu = false, event?: Event ) {
    if ( event ) {
      event.preventDefault();
    }
    if ( item?.name ) {
      this.menuItemSelected.emit( item );
    }
    if ( closeMenu ) {
      this.onMenuIconClicked();
    }
  }
}
