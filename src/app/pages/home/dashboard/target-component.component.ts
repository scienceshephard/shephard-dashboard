import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables, } from 'chart.js';
import { DummydataService } from '../../../service/dummydata.service';
import { MatIcon } from '@angular/material/icon';

// Register Chart.js modules
Chart.register(...registerables);

@Component({
  selector: 'app-target-component',
  standalone: true,
  imports: [MatIcon],
  template: `
    <canvas #targetChart></canvas>
    <div class='details'>
      <div class='details-icon'>
        <span [style]="'background-color: #E2FFF3;'" ><mat-icon fontSet="material-icons-outlined" [style]="'color: #4AB48E;'">shopping_bag</mat-icon></span>
        <span [style]="'background-color: #FFF5DF;'"><mat-icon fontSet="material-icons-outlined" [style]="'color: #FFCF00;'">local_activity</mat-icon></span>
      </div>
      
    </div>
  `,
  styles: `
    canvas{
      display: block;
      width: 300px;
    }
    .details{
      display: flex;
    }
    .details-icon{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    span{
      margin:auto;
      padding: 2px;
      border-radius: 5px;
    }
  `
})
export class TargetComponentComponent {
  @ViewChild('targetChart') targetChart!: ElementRef<HTMLCanvasElement>;

  constructor (private dummyData: DummydataService){}
  ngAfterViewInit() {
    const ctx = this.targetChart.nativeElement.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dummyData.getLabels(),
          datasets: [
            {
              label: 'Online Sales',
              data: this.dummyData.dataset1,
              backgroundColor: '#FFCF00',
              borderWidth: 1,
              borderRadius: 4,
            },
            {
              label: 'Offline Sales',
              data: this.dummyData.dataset2,
              backgroundColor: '#4AB48C',
              borderWidth: 1,
              borderRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: false,
              grid:{
                display: false,
                drawTicks: false,
              },
            },
            y: {
              beginAtZero: true,
              grid:{
                drawTicks: false,
                drawOnChartArea: false,
              },
              ticks:{
                display: false,
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      });
    }
  }

}
