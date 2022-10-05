import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';

  onSubmit(form:NgForm)
  {
    console.log(form.value)
    console.log("First Name is :",form.value.firstName)
    console.log("LastName Name is :",form.value.lastName)
    console.log("Email is :",form.value.email)
    console.log("Comments is :",form.value.comments)
    console.log("Are you friendly :",form.value.isFriendly)
  
  
  }
}
