import { Component, Input, OnInit } from '@angular/core';

import { Person } from '../../persons';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  // Properties
  //@Input() props!: {};
  @Input() props!: Person;

  /*
  name: string = 'Mukthar';
  age: number = 54;
  gender: string = 'M';
  married: boolean = true;
  */

  constructor() { }

  ngOnInit(): void {
  }

}
