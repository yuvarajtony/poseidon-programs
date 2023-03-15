import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit{

  loginform: FormGroup;

  ngOnInit() {
    this.loginform = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.required]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)])
      });
  }

  onlogin()
  {
    
  }
}
