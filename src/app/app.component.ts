import { Component } from '@angular/core';
import { NavbarComponent } from "./component/navbar.component";
import { MainComponent } from "./component/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, MainComponent],
  template: `
  <div class="container">
    <app-navbar />
    <app-main />
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
  `
})
export class AppComponent {
  title = 'shephard-dashboard';
}