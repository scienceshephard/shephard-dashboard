import { Component } from '@angular/core';
import { MobileNavbarComponent } from './mobile-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mobile-main',
  standalone: true,
  imports: [MobileNavbarComponent, RouterOutlet],
  template: `
    <div class="mobile-main-content">
      <router-outlet />
    </div>
    <app-mobile-navbar />
  `,
  styles: `
    app-mobile-navbar{
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 1000;
      border-top: 1px solid var(--mat-sys-outline);
      background-color: var(--mat-app-background-color);
    }
    .mobile-main-content{
      height: calc(100vh - 50px - 80px);
      overflow-y: auto;
    }
  `
})
export class MobileMainComponent {

}
