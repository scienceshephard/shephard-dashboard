import { Component, input, signal } from '@angular/core';
import { Widget } from '../../model/dashboard'
import { NgComponentOutlet } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WidgetOptionsComponent } from "./widget-options/widget-options.component";
@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptionsComponent],
  template: `
    <div class="container box-shadow">
      <div class="header-container">
        <h3>{{ data().title }}</h3>
        <button mat-icon-button class="settings-button" (click)="showOptions.set(true)"> <mat-icon>settings</mat-icon> </button>
      </div>
      <ng-container [ngComponentOutlet]="data().content" />
      @if(showOptions()){
        <app-widget-options [(showOptions)]="showOptions" [data]="data()" />
      }
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
    .container h3{
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
    }
    .header-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .settings-button{
      position: absolute;
      top: 0;
      right: 0;
     display:flex;
    }
  `
})
export class WidgetComponent {
  data = input.required<Widget>();
  showOptions= signal(false)
}
