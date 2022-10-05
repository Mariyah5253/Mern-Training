import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgUrl:string;
  constructor() { 
    this.imgUrl='../assets/angular_logo.jpg'
  }

  ngOnInit(): void {
  }

}
