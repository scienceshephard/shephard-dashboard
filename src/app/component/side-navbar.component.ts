import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DashboardService } from '../service/dashboard.service';
export type MenuItem= {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatListModule, RouterLink, RouterLinkActive],
  template: `
  <mat-nav-list>
      @for (item of menuItems(); track $index) {
          <a mat-list-item [routerLink]="[item.route]" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
              <mat-icon color="primary" [fontSet]="rla.isActive ? 'material-icons': 'material-icons-outlined' " matListItemIcon> {{ item.icon }} </mat-icon>
          @if(!sidenavCollapsed()) {
            <span matListItemTitle>{{ item.label }}</span>
          }
          </a>
        }
      
    </mat-nav-list>
  `,
  styles: `
  `
})
export class SideNavbarComponent {
  
  constructor(private dashboardService: DashboardService){}
  sidenavCollapsed= computed(()=> this.dashboardService.collapsed());

  
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
      icon: 'chat',
      label: 'Messages',
      route: 'chat'
    }
  ])
}
