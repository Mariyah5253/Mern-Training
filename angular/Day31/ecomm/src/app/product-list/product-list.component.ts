import { Component, OnInit } from '@angular/core';
import {Product} from './products';
import {products} from './products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products: Product[]
  constructor() { 
    this.products =products;

    console.log(this.products[0].name);
  
  }

  ngOnInit(): void {
  }
  share()
  {
    window.alert("The product has been shared!")
  }
  clickMe()
  {
    console.log("123");
    window.alert("You will be NOTIFIED when product goes on SALE!");
  }

}
