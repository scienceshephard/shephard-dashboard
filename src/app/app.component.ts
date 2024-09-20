import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  template: `
  <div class="wrapper container bg-red-700">
    <app-navbar />
  </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'shephard-dashboard';
}
