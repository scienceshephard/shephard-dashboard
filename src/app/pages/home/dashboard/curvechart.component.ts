import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables, scales } from 'chart.js';

// Register Chart.js modules
Chart.register(...registerables);

@Component({
  selector: 'app-curvechart',
  standalone: true,
  imports: [],
  template: `<canvas  id="visitorChart"></canvas>`,
  styles: `
  canvas {
    width: 400px;
    height: 300px;
  }
`
})
export class CurvechartComponent implements OnInit {
  ngOnInit() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    new Chart('visitorChart', {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Loyal Customers',
            data: [100,  200, 350, 180, 400],
            borderColor: 'purple',
            borderWidth: 4,
            backgroundColor: 'rgba(128,0,128,0.2)',
            tension: 0.4, // Smooth curve
            pointRadius: 0,
          },
          {
            label: 'New Customers',
            data: [250, 180, 350, 150, 300, 200],
            borderColor: 'red',
            borderWidth: 4,
            backgroundColor: 'rgba(255,0,0,0.2)',
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: 'Unique Customers',
            data: [180, 250, 150, 300, 220, 350],
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