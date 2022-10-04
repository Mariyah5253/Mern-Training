import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
 
    this.newItemEvent.emit( value );
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
