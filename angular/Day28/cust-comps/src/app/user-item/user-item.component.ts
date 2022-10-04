import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name:string="Mariya Hussain";
  imgUrl: string; 
  constructor() { 
  this.imgUrl= 'https://picsum.photos/640/360';
  }
  handleClick() {
    window.alert('Event Binding happening...');
    console.log('Button Clicked');
  }

  ngOnInit(): void {
  }

}
