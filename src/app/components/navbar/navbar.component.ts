import { Component, computed, ElementRef, HostListener, OnInit, signal, ViewChild, HostBinding, Renderer2, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatIconModule,  MatSidenav, MatSidenavContainer, MatSidenavContent, MatButtonModule, MatToolbarModule, RouterOutlet, CustomSidenavComponent],
  animations: [ 
    trigger('openClose', [
      state('open', style({
        height: '20px',
        opacity: 1,
        backgroundColor: 'yellow',})),
      state('closed', style({
        height: '10px',
        opacity: 0.8,
        backgroundColor: 'blue',
      })),
      // transition('* => closed', [animate('1s')]),
      // transition('* => open', [animate('0.5s')])
      // transition('open <=> closed', [animate('1s')])
    ]),
    trigger('myInsertRemoveTrigger',
      [state('c', style({
        backgroundColor: 'red'
      })), transition('* =>c', [animate('2s')])]
    )
  ],
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
      <div class="search-box"  [style.backgroundColor]="isDarkMode? '#444559': '' ">
        <button mat-icon-button class="toggleBTN" (click)="toggleInput()" ><mat-icon fontIcon="search" /></button>
        @if (showInput()) {
          <input #inputText type="text"  placeholder="Search here..." class="search" (blur)="onBlur()">
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
    .side-navbar{
      height:100vh;
    }
    .search-box{
      display: flex;
      border-radius: 20px;
      background-color: #e7e4bf;
      margin-left: auto;
      width: fit-content;
      // transition: width 2s;
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
      background-color:#e7e4bf00;
      transform: all 400ms;
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
    .showSearch{
      visibility: visible;
      opacity: 1;
    }
    .toggleBtn:hover {
      background-color: #0056b3;
    }
  `
})
export class NavbarComponent implements OnInit{
  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef){
  }
  ngOnInit(): void {
    this.updateHeaderText(window.innerWidth);//Changes the header text when the width of the device is that of a phone
  }
  header:String = "Shephard Dashboard";
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


    isOpen = true;
    toggler(){
      this.isOpen = !this.isOpen;
    }
    
    showInput= signal(false);
    @ViewChild('inputText', {static: false}) inputText!: ElementRef;
  
    toggleInput(){
      this.showInput.set(!this.showInput());
      this.cdr.detectChanges()
      if(this.inputText?.nativeElement){
        this.inputText.nativeElement.focus();
      }
    }
    onBlur(){
      this.showInput.set(false);
      this.renderer.setStyle(this.inputText.nativeElement, 'width', 'fit-content');
    }
  }
