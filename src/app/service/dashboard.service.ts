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

  widgets= signal<Widget[]>([
    {
      id: 1,
      title: "Todays Sales",
      content: DashboardComponent},
    {
      id: 2,
      title: "Visitors Insights",
      content: ChatComponent
    },
    {
      id: 3,
      title: "Total Revenue",
      content: BarChartsComponent
    },
    {
      
      id: 4,
      title: "Customer Satisfaction",
      content: CurveChartsComponent,
    },
    {
      id: 5,
      title: "Top Products",
      content: ListChartsComponent,
    },
    {
      id: 6,
      title: "Sales by Country",
      content: MapsComponent,
    },
    {
      id: 7,
      title: "Volume Vs Service Level",
      content: BarChartsComponent,
    },
  ])
  movemoveWidgetToRight(id:number){
    const index = this.widgets().findIndex( w => w.id === id);
    if(index === this.widgets().length -1){
      return;
    }
    const newWidget = [...this.widgets()];
    [newWidget[index], newWidget[index+ 1]] =[{...newWidget[index + 1]},{...newWidget[index]}];
    this.widgets.set(newWidget);
  }
  moveWidgetToLeft(id:number){
    const index = this.widgets().findIndex( w => w.id === id);
    if(index === 0){
      return;
    }
    const newWidget = [...this.widgets()];
    [newWidget[index], newWidget[index - 1]] =[{...newWidget[index - 1]},{...newWidget[index]}];
    this.widgets.set(newWidget);

  }

  constructor() { }
}
