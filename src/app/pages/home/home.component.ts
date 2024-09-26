import { Component, inject } from '@angular/core';
import { WidgetComponent } from "../../components/widget/widget.component";
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WidgetComponent],
  template: `
  <div class="dashboard-widget">
    @for (w of store.widget(); track $index) {
      <app-widget [data]="w" />
    }
  </div>
  `,
  styles: `
    .dashboard-widget{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 20px;
    }
  `,
  providers: [DashboardService],
})
export class HomeComponent {
  store= inject(DashboardService)
}
