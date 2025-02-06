import { Component, inject, input } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { Widget } from '../../model/dashboard';
import { DashboardWidgetComponent } from "../../component/widget/dashboard-widget.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, DashboardWidgetComponent],
  template: `
    <div class="dashboard-widget"> 
      @for(w of store.widgets(); track $index){
        <app-dashboard-widget [data]="w" />
      }
    </div>
  `,
  styles: `
  .dashboard-widget{
    display: grid;
    grid-template-areas: "today today visitors"
                          "revenue customers target"
                          "product sales volume";
    gap: 20px;
    margin: 20px;
  }
    `
})
export class HomeComponent {
  store= inject(DashboardService)
  data = input.required<Widget>()
}
