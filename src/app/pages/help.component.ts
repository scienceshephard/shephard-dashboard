import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  template: `
    <div class='help-page'>
      <h1>Help Page</h1>
      <p>This is the help center page content.</p>
    </div>
  `,
  styles: `
    .help-page{
      height: 100%;
    }
  `
})
export class HelpComponent {

}
