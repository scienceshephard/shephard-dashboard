import { Component, computed } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from "./side-navbar.component";
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, RouterOutlet, SideNavbarComponent],
  template: `
    <mat-sidenav-container  class="side-navbar"  [hasBackdrop]="false" >
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()"> 
        <app-side-navbar  />
      </mat-sidenav>
        <mat-sidenav-content [style.margin-left]="sidenavWidth()" >
            <router-outlet />
        </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: `
    mat-sidenav-container{
      height:100%;
    }
    mat-sidenav-content{
      background-color:#FBFBFD;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 20px;
    }
  `
})
export class MainComponent {
  constructor(private dashboardService: DashboardService){ }
  sidenavWidth= computed(()=> this.dashboardService.collapsed()? '65px': '200px')

}
