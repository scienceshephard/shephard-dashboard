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
        <div>
          <label>{{ 'Avatar'}}</label>
        </div>
        <fieldset>
          <legend>Account Settings</legend>
          <form [formGroup]="accountForm" (ngSubmit)="onSubmit()">

            <div class="input-container">
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
                <label for="Last Name">Last Name:</label>
                <input
                  type="text"
                  id="Last Name"
                  formControlName="Last Name"
                  [ngClass]="{ 'error-input': isInvalid('Last Name') }"
                />
              </div>
            </div>
            @if (isInvalid('Last Name')) {
              <p class="error-msg">Password is required.</p>
            }
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
            }            <button type="submit">Update</button>
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
    .account-page {
      height: 80vh;
      border: 1px solid;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .form {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.6rem;
    }
    .img-container {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      background-image: url('https://www.w3schools.com/howto/img_avatar.png');
      background-size: cover;
      background-position: center;
    }
    fieldset {
      width: 50%;
      margin-inline: auto;
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
  `]
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
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
