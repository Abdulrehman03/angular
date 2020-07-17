import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  
 ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.registerForm.value)
  }
}
