import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  template: `
    <div class="account-page">
      <h1>Account Page</h1>
      <p>This is the account page content.</p>
    </div>
  `,
  styles: `
    .account-page{
      height: 80vh;
    }
  `
})
export class AccountComponent {

}
