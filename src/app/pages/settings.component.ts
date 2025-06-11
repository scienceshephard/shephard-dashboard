import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  template: `
    <div class="settings-page">
      <h1>Nothing much here 🙄</h1>
      <p>Just route to another page. 🤡</p>
    </div>
  `,
  styles: `
    .settings-page{
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      font-size:2rem;
      text-align: center;
    }
  `
})
export class SettingsComponent {

}
