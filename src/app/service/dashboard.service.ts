import { Injectable, signal } from '@angular/core';
import { Widget } from '../model/dashboard';
import { DashboardComponent } from '../pages/home/dashboard/dashboard.component';
import { ChatComponent } from '../pages/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  widget= signal<Widget[]>([
    {
      id: 1,
      title: "Todays Sales",
      content: DashboardComponent},
    {
      id: 2,
      title: "Visitors Insights",
      content: ChatComponent
    }
  ])

  constructor() { }
}
