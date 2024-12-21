import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Widget } from '../../../model/dashboard';
import { DashboardService } from '../../../service/dashboard.service';


@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatIcon, MatButtonModule],
  template: `
      <button mat-icon-button class="close-button" (click)="showOptions.set(false)">
        <mat-icon>close</mat-icon>
      </button>

      
      <button mat-icon-button class="move-forward-button" (click)="store.movemoveWidgetToRight(data().id)" >
        <mat-icon>chevron_right</mat-icon>
      </button>
      
      <button mat-icon-button class="move-backward-button" (click)="store.movemoveWidgetToRight(data().id)">
        <mat-icon>chevron_left</mat-icon>
      </button>
  `,
  styles: `
    :host{
       position: absolute;
       width:100%;
       height:100%;
       z-index:3;
       background: whitesmoke;
       color:black;
       top:0;
       left:0;
       display:flex;
       flex-direction:column;
       align-items: center;
      >div{
        display: flex;
      }
    }
    .close-button{
      position: absolute;
      top:0;
      right:0;
    }
    .move-forward-button{
      position: absolute;
      top: 50%;
      transform:translateY(-50%);
      right: -6px;
    }
    .move-backward-button{
      position: absolute;
      top: 50%;
      transform:translateY(-50%);
      left: -6px;
    }
  `
})
export class WidgetOptionsComponent {
  showOptions = model<boolean>(false)
  data = input.required<Widget>();
  store = inject(DashboardService)
}
