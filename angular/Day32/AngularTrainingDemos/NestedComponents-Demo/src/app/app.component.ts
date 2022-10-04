import { Component } from '@angular/core';

import { Person, persons } from '../persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Nested Components';
  
  user: Person = {
    name: 'Mukthar',
    age: 54,
    gender: 'M',
    married: true,
  };

  humans: Person[] = persons;

  //items = ['item-1', 'item-2', 'item-3'];
  items: string[] = ['item-1', 'item-2', 'item-3'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

