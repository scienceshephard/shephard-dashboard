import { Component, input } from '@angular/core';
import { Widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard-widget',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <div class="dashboard-container mat-elevation-z4"  > 
      <div class="header-contaner">
        <h3>{{data().title}}</h3>
      </div>  
      <ng-container [ngComponentOutlet]="data().content" />
    </div>
  `,
  styles: `
   .dashboard-container{
      height: 100%;
      padding: 20px;
      border-radius: 15px;
    }
    .header-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 590px){
      .dashboard-container{
        width: 100%;
        border-radius: 0px;
        border-bottom: 3px solid var(--mat-divider-color);
      }
    .box-shadow{
      box-shadow: none;
    }
    }
    `
})
export class DashboardWidgetComponent {
  data = input.required<Widget>();
}
