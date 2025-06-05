import { Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemsService } from '../service/menu-items.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [ MatButtonModule, MatListModule,  RouterLink, RouterLinkActive, MatIconModule, ],
  template: `
    <nav>
      @for (item of getmenuItems(); track $index) {
          <a mat-list-item [routerLink]="[item.route]" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
              <mat-icon class='link' color="primary" [fontSet]="rla.isActive ? 'material-icons': 'material-icons-outlined' " matListItemIcon> {{ item.icon }} </mat-icon>
          
            <span matListItemTitle>{{ item.label }}</span>
          </a>
        }
    </nav>
  `,
  styles: `
  a{
    display: flex;
    flex-direction: column;
  }
  nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
  }
  `
})
export class MobileNavbarComponent {
  constructor(private menuServices: MenuItemsService){}
    getmenuItems= computed(()=> this.menuServices.menuItems());
}
