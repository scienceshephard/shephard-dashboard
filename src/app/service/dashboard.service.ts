import { Injectable, signal } from '@angular/core';
import { Widget } from '../model/dashboard';
import { DashboardComponent } from '../pages/home/dashboard/dashboard.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { BarChartsComponent } from '../pages/home/dashboard/bar-charts.component';
import { CurveChartsComponent } from '../pages/home/dashboard/curve-charts.component';
import { ListChartsComponent } from '../pages/home/dashboard/list-charts.component';
import { MapsComponent } from '../pages/home/dashboard/maps.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  widget= signal<Widget[]>([
    {
      title: "Todays Sales",
      content: DashboardComponent},
    {
      title: "Visitors Insights",
      content: ChatComponent
    },
    {
      title: "Total Revenue",
      content: BarChartsComponent
    },
    {
      title: "Customer Satisfaction",
      content: CurveChartsComponent,
    },
    {
      title: "Top Products",
      content: ListChartsComponent,
    },
    {
      title: "Sales by Country",
      content: MapsComponent,
    },
    {
      title: "Volume Vs Service Level",
      content: BarChartsComponent,
    },
  ])

  constructor() { }
}
