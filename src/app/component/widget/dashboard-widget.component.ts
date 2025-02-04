import { Component, inject, input } from '@angular/core';
import { Widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard-widget',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <div class="dashboard-container box-shadow">
      <div class="header-contaner">
        <h3>{{data().title}}</h3>
      </div>  
      <<ng-container [ngComponentOutlet]="data().content" />
    </div>
  `,
  styles: `
   .dashboard-container{
      position: relative;
      height: 100%;
      width: 100%;
      padding: 20px;
      border-radius: inherit;
      box-sizing: border-box;
      overflow: hidden;
      background-color: #FFFFFF;
    }
    .header-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    } :host{
      display: block;
      border-radius: 15px;
    }
    .box-shadow{
      box-shadow: 0px 4px 8px  rgb(0, 0, 0, 0.2);
    }
    `
})
export class DashboardWidgetComponent {
  data = input.required<Widget>();
}
