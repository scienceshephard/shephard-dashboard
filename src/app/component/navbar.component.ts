import { ChangeDetectorRef, Component, computed, HostListener, Renderer2, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule, MatToolbarModule ],
  template: `
   <mat-toolbar class="toolbar"  #toolbar>
    <div class="header">
        <button mat-icon-button (click)="toogle()"> 
          <mat-icon fontIcon="menu" />
      </button>
      <button mat-icon-button (click)="changeTheme()">
        <mat-icon fontIcon="{{theme()}}"/>
      </button>
    </div>
    <div class="header-content" >
      <h1>{{header}}</h1>
    </div>
  </mat-toolbar>
  `,
  styles: ``
})
export class NavbarComponent {
  header:String = "Shephard Dashboard";

  constructor(private dashboardService: DashboardService){

  }

  toogle(){
    this.dashboardService.collapsed.set(!this.dashboardService.collapsed());
  }

  theme= signal<string>('light_mode');
  body=document.body;
  isDarkMode:boolean= false;  
  changeTheme(){
    this.isDarkMode=!this.isDarkMode;
    if(this.isDarkMode){
      this.theme.set('dark_mode')
        this.body.classList.add('dark-mode')
      }else{
        this.theme.set('light_mode')
        this.body.classList.remove('dark-mode');
      }
    }
}
