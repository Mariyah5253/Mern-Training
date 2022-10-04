import { Component } from '@angular/core';
import {cards,Card} from './cardData'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car: Card[]= cards;
  title = 'airbnb';
}
