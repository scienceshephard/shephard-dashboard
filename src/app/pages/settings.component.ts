import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  template: `
    <div class="settings-page">
      <h1>Settings Page</h1>
      <p>This is the settings page content.</p>
    </div>
  `,
  styles: `
    .settings-page{
      height: 80vh;
    }
  `
})
export class SettingsComponent {

}
