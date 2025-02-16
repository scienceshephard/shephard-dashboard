import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-histogram',
  standalone: true,
  imports: [MatProgressBarModule],
  template: `
    <div class=''>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Sales</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Home Decor Range</td>
          <td> <mat-progress-bar mode="determinate" value="40"></mat-progress-bar> </td>
          <td>200</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Apple</td>
          <td> <mat-progress-bar mode="determinate" value="40"></mat-progress-bar> </td>
          <td>200</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Apple</td>
          <td> <mat-progress-bar mode="determinate" value="40"></mat-progress-bar> </td>
          <td>200</td>
        </tr>
      </table>
    </div>
  `,
  styles: `
    table{
      width: 100%;
      border-collapse: collapse;
    }
    tr{
      border-bottom: 1px solid #ddd;
    }
    tr{
      text-align: left;
    }
  `
})
export class HistogramComponent {

}
