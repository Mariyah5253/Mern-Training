import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {
  // Properties
  name: string;
  age: number;
  married: boolean;
  dow: number = new Date().getDay();
  title1: string = 'Property Binding';
  imgUrl: string = 'https://picsum.photos/640/360';
  skills: string[] = ['MySQL', 'MongoDB', 'Node.js', 'React', 'Angular'];

  constructor() { // Initializing
    this.name = 'Mukthar';
    this.age = 54;
    this.married = true;
  }

  handleClick() {
    window.alert('You clicked the button...');
    console.log('Button Clicked...');
  }

  ourFunction(n: number):boolean {
    return (n % 2 == 0) ? true : false;
  }

  getColor(): string {
    return (Math.random() > 0.5) ? "red" : "green";
  }
  
  ngOnInit(): void {
  }

}
