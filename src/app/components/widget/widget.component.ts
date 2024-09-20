import { Component, input } from '@angular/core';
import { Widget } from '../../model/dashboard'
import { NgComponentOutlet } from '@angular/common';
@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <div class="container box-shadow">
      <h1>{{ data().title }}</h1>
      <ng-container [ngComponentOutlet]="data().content" />
    </div>
  `,
  styles: `
    :host{
      display: block;
      border-radius: 15px;
    }
    .box-shadow{
      box-shadow: 0px 4px 8px  rgb(0, 0, 0, 0.2);
    }
    .container h1{
      margin: 0px;
      color: blue;
    }
    .container{
      position: relative;
      height: 100%;
      width: 100%;
      padding: 20px;
      border-radius: inherit;
      box-sizing: border-box;
      overflow: hidden;
      margin: 10px;

    }
  `
})
export class WidgetComponent {
  data = input.required<Widget>();
}
