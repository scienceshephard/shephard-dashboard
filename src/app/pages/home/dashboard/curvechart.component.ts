import { Component, OnInit } from '@angular/core';
import { Chart, registerables, } from 'chart.js';
import { DummydataService } from '../../../service/dummydata.service';

// Register Chart.js modules
Chart.register(...registerables);

@Component({
  selector: 'app-curvechart',
  standalone: true,
  imports: [],
  template: `<canvas  id="visitorChart"></canvas>`,
  styles: `
  canvas {
    width: 500px;
    height: 300px;
  }
`
})
export class CurvechartComponent implements OnInit {
  constructor(private dummydata: DummydataService){}
  ngOnInit() {
    const labels = this.dummydata.getLabels();
    
    new Chart('visitorChart', {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Loyal Customers',
            data: this.dummydata.dataset1,
            borderColor: 'purple',
            borderWidth: 4,
            backgroundColor: 'rgba(128,0,128,0.2)',
            tension: 0.4, // Smooth curve
            pointRadius: 0,
          },
          {
            label: 'New Customers',
            data: this.dummydata.dataset2,
            borderColor: 'red',
            borderWidth: 4,
            backgroundColor: 'rgba(255,0,0,0.2)',
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: 'Unique Customers',
            data: this.dummydata.dataset3,
            borderColor: 'green',
            borderWidth: 4,
            backgroundColor: 'rgba(0,128,0,0.2)',
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            min: 100,
            max: 400,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 5
          }
        },
        animation:{
          easing: "linear",
        }
      }
    });
    }
}