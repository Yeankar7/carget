import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],



})
export class RegisterComponent implements OnInit {

  reactiveForm! : FormGroup;

  constructor(
    private fb: FormBuilder

  ) { }
  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: "",
      email: "",
      password: "",
      passwor: "",
      country: "",
      file: "",
      image: "",
    })
  }



  onSubmit() {
    console.log(this.reactiveForm.value);
  }

}
