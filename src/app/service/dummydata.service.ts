import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummydataService {

  constructor() { }
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  dataset1= [100,  200, 350, 180, 400];
  dataset2= [250, 180, 350, 150, 300, 200];
  dataset3= [180, 250, 150, 300, 220, 350];
  public getLabels(){
    return this.labels;
  }
}
