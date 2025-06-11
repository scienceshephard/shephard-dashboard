import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  template: `
    <div class='help-page'>
      <h1>Contact Me for cool designs like this</h1>
      <p>Click 👉🏾 <a href='https://opeyemi-ogbe.vercel.app/'>here</a> to get to my portfolio link</p>
    </div>
  `,
  styles: `
    .help-page{
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
export class HelpComponent {

}
