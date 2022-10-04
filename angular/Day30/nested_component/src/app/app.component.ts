import { Component } from '@angular/core';
import {persons,Person} from './persons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  humans :Person[] = persons;
  title = 'nested_component';
    //items = ['item-1', 'item-2', 'item-3'];
    items: string[] = ['Item-1', 'Item-2', 'Item-3'];

    addItem(newItem: string) {
     
      this.items.push(newItem);
    }
  

}
