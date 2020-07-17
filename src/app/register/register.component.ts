import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
0
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
