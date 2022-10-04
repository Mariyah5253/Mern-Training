import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Transform Data';
  today = new Date();
  amount: number = 12345.75;
  theArray: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
}
