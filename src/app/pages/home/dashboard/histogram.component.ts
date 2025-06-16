import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../../../model/dashboard';

@Component({
  selector: 'app-histogram',
  standalone: true,
  imports: [MatProgressBarModule, MatTableModule],
  template: `
      <table mat-table style="background-color: transparent;" [dataSource]="element_data">
        <caption>Top 5 Products</caption>        
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>S/N</th>
          <td mat-cell *matCellDef="let element"> {{element.id}} </td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <ng-container matColumnDef="popularity">
          <th mat-header-cell *matHeaderCellDef>Popularity</th>
          <td mat-cell *matCellDef="let element">
            <mat-progress-bar mode="determinate" [value]="element.popularity" color="primary"></mat-progress-bar>
          </td>
        </ng-container>

        <ng-container matColumnDef="sales">
          <th mat-header-cell *matHeaderCellDef>Sales</th>
          <td mat-cell *matCellDef="let element"> {{element.sales}}% </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayColumns;"></tr>
      </table>
  `,
  styles: `
    table{
      width: 100%;
      height: 90%;
      gap: 10px;
    }
    thead{
      border-bottom: 1px solid grey ;
    }
    tr{
      text-align: center;
    }
  `
})
export class HistogramComponent {
  Products: string[]= ['Wealth', 'Apple', 'Apple'];
  element_data: Product[]=[
    { id: 4, name: 'Courage', popularity: 40, sales: 40 },
    { id: 2, name: 'Love', popularity: 60, sales: 60 },
    { id: 3, name: 'Kindness', popularity: 90, sales: 90 },
    { id: 1, name: 'Wealth', popularity: 10, sales: 10 },
    { id: 5, name: 'Boldness', popularity: 50, sales: 50 },
  ]
  displayColumns: string[]=['id', 'name', 'popularity', 'sales']
}
