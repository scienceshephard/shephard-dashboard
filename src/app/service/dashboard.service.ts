import { Injectable, signal } from '@angular/core';
import { Widget } from '../model/dashboard';
import { HistogramComponent } from '../pages/home/dashboard/histogram.component';
import { LinechartComponent } from '../pages/home/dashboard/linechart.component';
import { CurvechartComponent } from '../pages/home/dashboard/curvechart.component';
import { BarchartComponent } from '../pages/home/dashboard/barchart.component';
import { MapsComponent } from '../pages/home/dashboard/maps.component';
import { DashboardComponent } from '../pages/home/dashboard/dashboard.component';
import { TargetComponentComponent } from '../pages/home/dashboard/target-component.component';
import { ClusteredBarchartComponent } from '../pages/home/dashboard/clustered-barchart.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //Collapse the side navbar
  collapsed= signal<boolean>(false);
  constructor() { }
  widgets= signal<Widget[]>([
    {
      id: 1,
      title: "Todays Sales",
      content: DashboardComponent,
     },
    {
      id: 2,
      title: "Visitors Insights",
      content: CurvechartComponent,
     },
    {
      id: 3,
      title: "Total Revenue",
      content: ClusteredBarchartComponent,
     },
    {
      
      id: 4,
      title: "Customer Satisfaction",
      content: MapsComponent,
     },
    {
      id: 5,
      title: "Target Reality",
      content: TargetComponentComponent,
     },
    {
      id: 6,
      title: "Top Products",
      content: HistogramComponent,
     },
    {
      id: 7,
      title: "Sales by Country",
      content: MapsComponent,
     },
    {
      id: 8,
      title: "Volume Vs Service Level",
      content: LinechartComponent,
     },
  ])
}
