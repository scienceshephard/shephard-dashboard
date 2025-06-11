import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails = signal<[string, string, string]>(['', '', '']);
}
