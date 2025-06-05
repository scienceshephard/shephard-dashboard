import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DashboardService } from '../service/dashboard.service';
import { MenuItemsService } from '../service/menu-items.service';
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule, MatListModule, RouterLink, RouterLinkActive],
  template: `
  <mat-nav-list>
    <nav>
      @for (item of getmenuItems(); track item.route) {
          <a mat-list-item [routerLink]="[item.route]" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
              <mat-icon class='link' color="primary" [fontIcon]="rla.isActive ? 'material-icons': 'material-icons-outlined' " matListItemIcon> {{ item.icon }} </mat-icon>
          @if(!sidenavCollapsed()) {
            <span matListItemTitle>{{ item.label }}</span>
          }
          </a>
        }
    </nav>
    <div class='dashboard-header'>
      <img src="/shephard-dashboard-icon.png" alt="shephard-dashboard-icon">
      @if(!sidenavCollapsed()) {
        <h1>Dashboard</h1>
      }
    </div>
  </mat-nav-list>
  `,
  styles: `
  .dashboard-header{
    margin-top: auto;
    display: flex;
    align-items: center;
  }
  a[mat-list-item]{
    padding: 50px 0px;
    text-align: center;
    border-radius: 0;
  }
  nav{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  mat-nav-list{
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .link{
    font-size: 3rem;
  }
  .link.mat-icon{
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  `
})
export class SideNavbarComponent {
  
  constructor(private dashboardService: DashboardService, private menuServices: MenuItemsService ){}
  sidenavCollapsed= computed(()=> this.dashboardService.collapsed());
  getmenuItems= computed(()=> this.menuServices.menuItems());
}
