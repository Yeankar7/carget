import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  errorMessage!:string;

  constructor(private router: Router){}

  login(){
    if(this.email==='admin' && this.password==='password'){
      this.router.navigate(['/register']);
    }else{
      this.errorMessage='invalid details';
    }
  }

  }
