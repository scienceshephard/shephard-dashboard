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
    app-main{
      height: 100%;
    }
    app-mobile-main{
      display: none;
    }
    @media (max-width: 996px) {
      app-main{
        display: none;
      }
      app-mobile-main{
        height: 100%;
        display: block;
      }
    }
  `
})
export class AppComponent {
  title = 'shephard-dashboard';
  isMobile = inject(ResponsiveService).isMobile;
}