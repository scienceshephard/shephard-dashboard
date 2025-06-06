import { ChangeDetectorRef, Component, computed, HostListener, inject, Renderer2, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { DashboardService } from '../service/dashboard.service';
import { ResponsiveService } from '../service/responsive-service.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule, MatToolbarModule ],
  template: `
   <mat-toolbar class="toolbar"  #toolbar>
    <div class="header">
      @if(!isMobile()){
        <button mat-icon-button (click)="toogle()"> 
          <mat-icon fontIcon="menu" />
      </button>
      }
      <button mat-icon-button (click)="changeTheme()">
        <mat-icon fontIcon="{{theme()}}"/>
      </button>
    </div>
    <h1>{{ showFullheader() ? 'S D' : 'Shephard Dashboard'}}</h1>
  </mat-toolbar>
  `,
  styles: `
  .toolbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .toolbar h1{
    font-size: 2rem;
  }
  `
})
export class NavbarComponent {
  showSearch = signal<boolean>(false)
  isMobile = inject(ResponsiveService).isMobile;
  showFullheader=inject(ResponsiveService).showFullheader;
  constructor(private dashboardService: DashboardService){

  }

  toogleSearchbtn(){
    this.showSearch.set(!this.showSearch());
    console.log(this.showSearch());
    
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
        this.body.classList.add('dark-mode');
        console.log(this.body.classList);
        
      }else{
        this.theme.set('light_mode')
        this.body.classList.remove('dark-mode');
      }
    }
}
