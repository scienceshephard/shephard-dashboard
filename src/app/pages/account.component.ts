import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <section class="account-page">
      <div class="form">
        <div class="img-container"></div>
        <div class='user-details'>
          <label>{{ 'Avatar'}}</label>
          <label>{{ 'Avatar First Name'}}</label>
          <label>{{ 'Avatar Last Name'}}</label>
        </div>
        <fieldset>
          <legend>Account Settings</legend>
          <form [formGroup]="accountForm" (ngSubmit)="onSubmit()">
            <div class="input-container">
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                formControlName="username"
                [ngClass]="{ 'error-input': isInvalid('username') }"
              />
            </div>
            @if (isInvalid('username')) {
              <p class="error-msg">Username is required.</p>
            }

            <div class="input-container">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                [ngClass]="{ 'error-input': isInvalid('email') }"
              />
            </div>
            @if (isInvalid('email')) {
              <p class="error-msg">Email is required.</p>
            }

            <div class="input-container">
              <label for="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                formControlName="firstName"
                [ngClass]="{ 'error-input': isInvalid('firstName') }"
              />
            </div>
            <div class="input-container">
              <label for="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                formControlName="lastName"
                [ngClass]="{ 'error-input': isInvalid('lastName') }"
              />
            </div>
            @if (isInvalid('lastName')) {
              <p class="error-msg">Password is required.</p>
            }

            <br />
            <button type="submit">Update</button>
          </form>
        </fieldset>
      </div>

      <marquee [scrollAmount]="25" direction="left" behavior="scroll">
        Here you can manage your account settings and preferences. Feel free to update your profile information and change your password. If you have any issues, please
        <a class="link" [routerLink]="['/help']">click here.</a>
      </marquee>
    </section>
  `,
  styles: [`
    .user-details{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: end;
      height: 100%;
    }
    .user-details label{
      background-image: linear-gradient(45deg, #0d11cf, #429faf);
      background-clip: text;
      color: transparent;
      font-weight: 500;
    }
    .account-page {
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      font-size: 1.6rem;
      gap: 20px;
    }
    .img-container {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      justify-items: center;
      background-image: url('https://www.w3schools.com/howto/img_avatar.png');
      background-size: cover;
      background-position: center;
    }
    fieldset {
      width: 50%;
      padding: 20px;
    }
    input {
      outline: none;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid;
      margin-left: auto;
      width: 70%;
    }
    .input-container {
      display: flex;
      padding: 5px;
    }
    .error-msg {
      color: red;
      margin-left: 20%;
      font-size: 0.9rem;
    }
    .error-input {
      border-color: red;
    }
    marquee {
      background-color: #eee;
      font-weight: 500;
      font-size: 1.4rem;
      margin-top: auto;
    }
    .link {
      color: #0094FE;
    }
    .link:hover {
      color: #00DF96;
    }
    button {
      width: 100%;
      margin-inline: auto;
      padding: 10px;
      font-size: 18px;
      background-color: #0094FE;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    @media (max-width: 1519px) {
      .form{
        align-items: start;
      }
      .user-details{
        height: 50%;
      }
      fieldset{
        width: 90%;
      }
      .img-container{
        align-self: center;
      }
    }
    @media (max-width: 997px){
      .img-container{
        height: 250px;
      }
    }
  `]
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.accountForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onSubmit(): void {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }
    console.log('✅ Form Submitted:', this.accountForm.value);
  }
}
