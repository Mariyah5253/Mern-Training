import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign-up';
  emailtouched:boolean=true;
  loginForm = new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),

  cpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
  newletter:new FormControl(''),
  
  })
  myfunc()
  {
    console.log(this.loginForm.value.newletter)
    return this.loginForm.value.newletter;
  }
  
  loginUser()
  {
 
    
    if(this.loginForm.value.password==this.loginForm.value.cpassword)
    {
    window.alert("Succefull Login");
    }
    else{
      window.alert("password Doesnt Match")
    }

  }
  



}
