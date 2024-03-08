import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { MenuComponent } from "../../components/hamburger-menu/menu.component";
import { SidebarMenuItem } from "../../models/sidebar-menu-item";
import { Observable, of } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  standalone: true,
  imports: [ RouterModule, FooterComponent, MenuComponent, AsyncPipe ],
  selector: 'rabbit-hole-events-reporting-core',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  menuItems: Observable<SidebarMenuItem[]> = of([] as SidebarMenuItem[]);

  constructor(
      private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = of([
      {
        name: 'events',
        state: 'events'
      }
    ]);
  }

  onMenuItemSelected( menuItem: SidebarMenuItem ) {
    this.router.navigateByUrl( menuItem.state ).then();
  }
}
