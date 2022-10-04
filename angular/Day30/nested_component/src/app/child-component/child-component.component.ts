import { Component, OnInit,Input } from '@angular/core';
import {Person} from '../persons'
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() props! : Person;

  constructor() {
    
   }
  
  ngOnInit(): void {

  }

}
