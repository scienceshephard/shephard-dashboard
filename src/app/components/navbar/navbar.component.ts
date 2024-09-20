import { Component, computed, ElementRef, signal, ViewChild, viewChild } from '@angular/core';
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
      <button mat-icon-button (click)="collapsed.set(!collapsed())"> 
        <mat-icon fontIcon="menu" />
     </button>
    <button mat-icon-button (click)="changeTheme()">
      <mat-icon fontIcon="{{theme()}}"/>
    </button>
    </mat-toolbar>

    <mat-sidenav-container #sidenav class="side-navbar"  hasBackdrop="false">
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()"> <app-custom-sidenav [collapsed]="collapsed()" /> </mat-sidenav>
        <mat-sidenav-content [style.margin-left]="sidenavWidth()" class="content">
            <router-outlet />
        </mat-sidenav-content>
    </mat-sidenav-container>

  `
})
export class NavbarComponent {
  collapsed= signal(false);
  sidenavWidth= computed(()=> this.collapsed()? '65px': '250px')
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
