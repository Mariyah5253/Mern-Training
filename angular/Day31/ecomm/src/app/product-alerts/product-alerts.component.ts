import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';
import {Product} from '../product-list/products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() props!:Product;
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem() {
 
    this.newItemEvent.emit( );
  }
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
