import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables, } from 'chart.js';
import { DummydataService } from '../../../service/dummydata.service';

// Register Chart.js modules
Chart.register(...registerables);

@Component({
  selector: 'app-clustered-barchart',
  standalone: true,
  imports: [],
  template: `
  <div>
    <canvas #clusteredBarChart></canvas>
  </div>
  `,
  styles: `
    canvas{
      display: block;
      width: 400px;
    }
  `
})
export class ClusteredBarchartComponent  implements AfterViewInit{
  @ViewChild('clusteredBarChart') clusteredBarChart!: ElementRef<HTMLCanvasElement>;

  constructor (private dummyData: DummydataService){}
  ngAfterViewInit() {
    const ctx = this.clusteredBarChart.nativeElement.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dummyData.getLabels(),
          datasets: [
            {
              label: 'Online Sales',
              data: this.dummyData.dataset1,
              backgroundColor: '#0094FE',
              borderWidth: 1
            },
            {
              label: 'Offline Sales',
              data: this.dummyData.dataset2,
              backgroundColor: '#00DF96',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: false, // Ensures bars are clustered side-by-side
              title: { display: true, text: 'Months' },
            },
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Sales' },
            }
          }
        }
      });
    }
  }
}
