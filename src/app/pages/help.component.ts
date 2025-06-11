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
      flex-direction: column;
      background-image: url('/custom.png');
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;
      padding-left: 20px;
    }
    h1{
      background-image: linear-gradient(45deg,#cf920d, #429faf);
      background-clip: text;
      color: transparent;
    }
    a{
      color: #007bff;
    }
    a:hover{
      color: #0056b3;
      text-decoration: underline;
    }
    @media (max-width: 997px) {
      .help-page {
        // background-size: cover;
        background-position: center;
      }
    }
    @media(max-width: 771px){
      .help-page {
       background-size: cover;
       justify-content: flex-end;
       gap: 20px;
      }
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  `
})
export class HelpComponent {

}
