import { Component } from '@angular/core';
import { SimpleserviceService } from './simpleservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicedemo';
  date : Date;
  address:string;
  

  constructor(private theService:SimpleserviceService) {
    this.date = this.theService.getDate();
    this.address= this.theService.getaddress();
  }

  ngOnInit() {
    
   
  }
 
}
