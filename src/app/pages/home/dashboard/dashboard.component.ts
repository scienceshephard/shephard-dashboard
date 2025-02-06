import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule ],
  template: `
    <div class='dashboard-container'>
    <div class="dashboard-subtitle">
      <p>Sales Summary</p>
      <button mat-button > <mat-icon fontIcon="ios_share"/> Export</button>
    </div>  
    <div class="dashboard-content">
      <div class="dashboard-card" [style]="'background-color:#FFE2E6;'">
        <label [style]="'background-color:#F9597D;'"><mat-icon fontIcon="leaderboard" [style.color]="color" [style.backgroundColor]="'white'" /></label>
        <h2>$1k</h2>
        <p>Total Sales<p>
          <span>+8% from yesterday</span>
      </div>

      <div class="dashboard-card" [style]="'background-color:#FFF4DE;'">
        <label [style]="'background-color:#FF947A;'"><mat-icon fontIcon="summarize" [style.color]="'white'" [style.backgroundColor]="'#FF947A'" /></label>
        <h2>300</h2>
        <p>Total Order<p>
          <span>+5% from yesterday</span>
      </div>

      <div class="dashboard-card" [style]="'background-color:#DCFCE7;'">
        <label [style]="'background-color:#3CD755;'"><mat-icon fontIcon="edit" [style.color]="'white'" [style.backgroundColor]="'bgColor'" /></label>
        <h2>5</h2>
        <p>Product Sold<p>
          <span>+1.2% from yesterday</span>
      </div>

      <div class="dashboard-card" [style]="'background-color:#F3E8FF;'">
        <label [style]="'background-color:#BF83FF;'"><mat-icon fontIcon="person_add" [style.color]="'white'" [style.backgroundColor]="'bgColor'" /></label>
        <h2>8</h2>
        <p>New Customers<p>
          <span>0.5% from yesterday</span>
      </div>
    </div>

    </div>
  `,
  styles: `
    .dashboard-subtitle{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .dashboard-content{
      display: flex;
      gap: 20px;
      justify-content: space-between;
    }
    .dashboard-card{
      width: fit-content;
      padding: 10px;
      border-radius: 20px;
    }
    span{
      color: blue;
      font-size:11px;
    }
    label{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }
  `
})
export class DashboardComponent {
  color:string= "#FA5A7E";
  bgColor:string="#fdfdf"
}
