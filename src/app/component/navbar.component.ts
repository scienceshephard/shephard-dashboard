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
      <div class='searchButton'>
        <label for='searchButton' (click) = " showSearch.set(true) " > 
          <mat-icon fontIcon="search" />
        </label>
          <input type='text' [style.display]= " showSearch()? 'block': 'hidden' " (blur)=" showSearch.set(false) " placeholder='Enter your search prompt' id='searchButton' />
      </div>
    </div>
  </mat-toolbar>
  `,
  styles: `
  .header-content{
    width: 100%;
    display: flex;
  }
  .header-content h1{
   align-self: center;
  }
  label[for='searchButton']{
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    margin-right: 5px;
    background-color: cyan;
    display: flex;
    border: 1px solid;
    align-items: center;
    width: fit-content;
  }
  .searchButton{
    border: 1px solid;
    margin-left: auto;
    padding: 5px;
    display: flex;
    border-radius: 20px;
    max-width: 50%;
  }
    input[id='searchButton']{
      // display: none;
      outline: none;
      width: 97%;
      font-size: 22px;
      background-color: transparent;
      height: 100%;
      border: none;
    }
  `
})
export class NavbarComponent {
  header:String = "Shephard Dashboard";
  showSearch = signal<boolean>(false)

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
        this.body.classList.add('dark-mode')
      }else{
        this.theme.set('light_mode')
        this.body.classList.remove('dark-mode');
      }
    }
}
