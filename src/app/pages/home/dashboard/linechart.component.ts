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
    <canvas id='LineChart'></canvas>
  `,
  styles: `
  canvas{
    display: block;
    width: 300px;
    height: 80% !important;
    margin: auto;
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
              borderColor: '#0094FE',
              borderWidth: 4,
              tension: 0.4,
              pointRadius: 3,
            },
            {
              label: 'This Month',
              data: this.dummyData.dataset3,
              backgroundColor: '#00DF96',
              borderColor: '#00DF96',
              borderWidth: 4,
              tension: 0.4,
              pointRadius: 3,
            }
          ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              color: 'white',
              lineWidth: 1,
            },
            ticks:{
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              color: 'white',
              lineWidth: 1,
              
            },
            ticks:{
              display: false,
            },
            beginAtZero: true,
          }
        },
        plugins:{
          legend:{
            position: 'bottom',
          },
          tooltip:{
            enabled: true,
          }
        }
      }
      });
    }
}
