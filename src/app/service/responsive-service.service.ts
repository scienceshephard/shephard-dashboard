import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  isMobile = signal<boolean>(window.innerWidth <= 996);
  showFullheader=signal<boolean>(window.innerWidth <= 460);
  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth <= 996);
    });
    window.addEventListener('resize', ()=>{
      this.showFullheader.set(window.innerWidth <= 460);
    })
  }
}