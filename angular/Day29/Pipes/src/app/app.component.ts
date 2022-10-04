import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Transform Data through pipes';
  today = new Date();
  amount: number = 5400.75;
  sample_string:string="Sample String"
  theArray: number[] = [94,4, 22, 43, 50, 60, 76, 88, 91];

}
