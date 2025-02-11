import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables, } from 'chart.js';
import { DummydataService } from '../../../service/dummydata.service';

// Register Chart.js modules
Chart.register(...registerables);

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [],
  template: `
  <div>
    <canvas id='LineChart'></canvas>
  </div>
  `,
  styles: `
  canvas{
    display: block;
    width: 400px;
  }
  `
})
export class LinechartComponent implements OnInit{

  constructor(private dummyData: DummydataService) { }

  ngOnInit() {
    new Chart('LineChart', {
      type: 'line',
        data: {
          labels: this.dummyData.getLabels(),
          datasets: [
            {
              label: 'Last Month',
              data: this.dummyData.dataset1,
              backgroundColor: '#0094FE',
              borderWidth: 1,
              tension: 0.4,
              pointRadius: 0,
            },
            {
              label: 'This Month',
              data: this.dummyData.dataset2,
              backgroundColor: '#00DF96',
              borderWidth: 1,
              tension: 0.4,
              pointRadius: 0,
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
