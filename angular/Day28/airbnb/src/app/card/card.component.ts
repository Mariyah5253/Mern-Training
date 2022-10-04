import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   img1:string;
   img2:string;
   rating:string;
   title:string;
   review_count:string;
   price:string;
   country:string;
  constructor() { 
    this.img1="../../assets/images/katie-zaferes.png"
    this.img2="../../assets/images/star.png"
    this.rating="5.0"
    this.review_count="(6)."
    this.title="Life Lessons with Katie Zaferes"
    this.price="136"
    this.country="USA"
  }

  ngOnInit(): void {
  }

}
