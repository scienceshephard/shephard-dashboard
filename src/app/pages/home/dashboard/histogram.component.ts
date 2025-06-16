import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-histogram',
  standalone: true,
  imports: [MatProgressBarModule],
  template: `
    <div class=''>
      <table  cellspacing="10" >
        <caption>Top 3 Products</caption>  
      <thead>
          <th>#</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Sales</th>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  `,
  styles: `
    table{
      width: 100%;
      border-collapse: collapse;
      height: 100%;
    }
    tr, thead{
      border-bottom: 1px solid var(--mat-app-text-color) ;
    }
    tr{
      text-align: center;
    }
  `
})
export class HistogramComponent {

}
