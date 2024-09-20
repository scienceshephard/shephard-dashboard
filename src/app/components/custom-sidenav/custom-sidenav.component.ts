import { Component, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'

export type MenuItem={
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule, MatListModule, RouterLink, RouterLinkActive],
  template: `
    <mat-nav-list>
      @for (item of menuItems(); track $index) {
          <a mat-list-item [routerLink]="[item.route]" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
              <mat-icon color="primary" [fontSet]="rla.isActive ? 'material-icons': 'material-icons-outlined' " matListItemIcon> {{ item.icon }} </mat-icon>
          @if (!sidenavCollapsed()) {
            <span matListItemTitle>{{ item.label }}</span>
          }
          </a>
        }
      
    </mat-nav-list>

  `,
  styles: `
    ::ng-deep .mat-sidenav{
      border-right: 2px solid #dadae1;
    }
  `
})
export class CustomSidenavComponent {
  
  sidenavCollapsed=signal(false);
  @Input() set collapsed(val:boolean){
    this.sidenavCollapsed.set(val);
  }

  menuItems= signal<MenuItem[]>([

    { 
      icon: 'home',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'account_circle',
      label: 'Account',
      route: 'account'
    },
    {
      icon: 'settings',
      label: 'Setings',
      route: 'settings'
    },
    {
      icon: 'leaderboard',
      label: 'Leaderboard',
      route: 'leaderboard'
    },
    {
      icon: 'shopping_cart',
      label: 'Order',
      route: 'order'
    },
    {
      icon: 'shopping_bag',
      label: 'Product',
      route: 'product'
    },
    {
      icon: 'monitoring',
      label: 'Sales report',
      route: 'sales'
    },
    {
      icon: 'chat',
      label: 'Messages',
      route: 'chat'
    }
  ])
  
}
