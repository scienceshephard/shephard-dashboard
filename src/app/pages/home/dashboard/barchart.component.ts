import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [],
  template: `
    <canvas #barChart></canvas>
    <div class='legend'>
      <div class='item'>
        <span class='dot volume'></span>
        <strong>829</strong>
      </div>
      <div class='item'>
        <span class='dot service'></span>
        <strong>900</strong>
      </div>
    </div>
  `,
  styles: `
    canvas{
      display: block;
      width: 50%;
    }
    .legend{
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .item{
      display: inherit;
      align-items: center;
      gap: 20px;
    }
    .dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: inline-block;
    }
    .volume{
      background-color: #2196f3;
    }
    .service{
      background-color: #00cba9;
    }
  `
})
export class BarchartComponent implements AfterViewInit{
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  constructor(){}
  ngAfterViewInit(){
    const ctx = this.barChart.nativeElement.getContext('2d');
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['', '', '', '', '', ''],
          datasets: [
            {
              label: 'Volume',
              data: [435, 300, 750, 250, 100, 550],
              backgroundColor: '#2196f3',
              stack: 'combined',
            },
            {
              label: 'Services',
              data: [700, 335, 365, 300, 600, 280],
              backgroundColor: '#00cba9',
              stack: 'combined',
            }
          ]
        },
        options:{
          responsive: true,
          scales: {
            x: {
              stacked: true,
              grid: { display: false },
              ticks: { display: false },
            },
            y: {
              stacked: true,
              grid: { display: false },
              ticks: { display: false },
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }    
        }
      })
    }
  } 
}
