import { Component, inject } from '@angular/core';
import { NavbarComponent } from "./component/navbar.component";
import { MainComponent } from "./component/main.component";
import { MobileMainComponent } from './component/mobile-main.component';
import { ResponsiveService } from './service/responsive-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, MainComponent, MobileMainComponent],
  template: `
  <div class="container">
    <app-navbar />
    @if(!isMobile()){
      <app-main />
    } @else {
    <app-mobile-main  />
    }
  </div>
  `,
  styles: `
    .container{
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    app-navbar{
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
    }
    app-main{
      height: 100%;
      padding-top: 64px;
    }
    app-mobile-main{
      display: none;
    }
    @media (max-width: 996px) {
      app-main{
        display: none;
      }
      app-mobile-main{
      display: block;
      background-color: var(--mat-app-background-color);
      padding-top: 50px;
      padding-bottom: 80px;
      height: 100vh;
      }
    }
  `
})
export class AppComponent {
  title = 'shephard-dashboard';
  isMobile = inject(ResponsiveService).isMobile;
}