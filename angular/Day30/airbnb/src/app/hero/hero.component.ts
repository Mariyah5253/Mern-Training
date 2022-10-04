import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  imgUrl:string;
  constructor() {
    this.imgUrl='../../assets/images/photo-grid.png';
   }

  ngOnInit(): void {
  }

}
