import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  isMobile = signal<boolean>(window.innerWidth <= 996);

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth <= 996);
    });
  }
}