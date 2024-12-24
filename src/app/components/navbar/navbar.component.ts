import { ChangeDetectorRef, Component, computed, ElementRef, HostListener, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
// import {  } from '@angular/material/'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatIconModule,  MatSidenav, MatSidenavContainer, MatSidenavContent, MatButtonModule, MatToolbarModule, RouterOutlet, CustomSidenavComponent],
  template: `
    <mat-toolbar class="toolbar"  #toolbar id="mat-toolbar">
    <div class="header">
        <button mat-icon-button (click)="collapsed.set(!collapsed())"> 
          <mat-icon fontIcon="menu" />
      </button>
      <button mat-icon-button (click)="changeTheme()">
        <mat-icon fontIcon="{{theme()}}"/>
      </button>
    </div>
    <div class="header-content" >
      <h1>{{header}}</h1>
      <div class="search-box" [class.SearchBtnExpands] = "isFocused" [style.backgroundColor]="isDarkMode? '#444559': '' ">
        <button mat-icon-button class="toggleBTN" (click)="toggleInput()"><mat-icon fontIcon="search" /></button>
        @if (showSearchInput) {
          <input type="text" #textInput placeholder="Search here..." class="search">
        }
      </div>
    </div>
    </mat-toolbar>

    <mat-sidenav-container #sidenav class="side-navbar"  hasBackdrop="false">
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()"> <app-custom-sidenav [collapsed]="collapsed()" /> </mat-sidenav>
        <mat-sidenav-content [style.margin-left]="sidenavWidth()" class="content">
            <router-outlet />
        </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles: `
    .toolbar{
      display: flex;
      gap: 20px;
    }
    .header{
      display: flex;
      gap: 30px;
    }
    .header-content{
      width: 80%;
      margin-left: auto;
      display: flex;
      align-items: center;
    }
    .header-content h1{
      font-weight: 500;
    }
    .search-box{
      display: flex;
      border-radius: 20px;
      background-color: #e7e4bf;
      margin-left: auto;
      width: calc(80% - 200px);
      // width: fit-content;
    }
    .search{
      outline: none;
      width: 100%;
      margin-left: 10px;
      margin-right: 30px;
      background-color: inherit;
      border: 1px none #dadae1;
    }
    #search:focus{
     font-weight: 100;
    }
    .SearchBtnExpands{
      width:50%;
     background-color: red;
    }
    .toggleBtn {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .toggleBtn:hover {
      background-color: #0056b3;
    }
  `
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
    this.updateHeaderText(window.innerWidth);
  }

  header:String = "Shephard Dashboard";
  isFocused:boolean = false;
  showSearchInput = false;
  @ViewChild('textInput', {static:false}) textInput!:ElementRef<HTMLInputElement>;
  toggleInput(){
    this.showSearchInput = true;
    setTimeout(() =>{
      if(this.textInput)
        this.textInput.nativeElement.focus();
    }, 0);
  }

  @HostListener('document:click', ['$event'])
  onclickOutside(event: MouseEvent){
    const target = event.target as HTMLElement;
    if(!this.textInput?.nativeElement.contains(target) && !target.classList.contains('toggleBtn')){
      this.showSearchInput = false; 
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event){
    const width = (event.target as Window).innerWidth;
    this.updateHeaderText(width)
  }

  //Updates header name
  private updateHeaderText(width: number){
    if(width <= 700){
      this.header = "SD";
    }
  }

  onFocused(){
    this.isFocused = true;
    console.log("isFocused: "+this.isFocused);
    
  }
  onBlur(){
    this.isFocused = false;
    console.log("isFocused: "+this.isFocused);
  }

  collapsed= signal(false);
  sidenavWidth= computed(()=> this.collapsed()? '65px': '200px')
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
