import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  reactiveForm!: FormGroup;
  spinner: boolean = false;
  notification: any = 'hide';
  err_msg!: string;



  error_messages = {
    'fname': [
      { type: 'required', message: 'First Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'rpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }
  _log: any;



  constructor(
    private fb: FormBuilder

  )
   {
    this.reactiveForm = this.fb.group({
      fname: new FormGroup('', Validators.compose([
        Validators.required
      ])),
      lname: new FormGroup('', Validators.compose([
        Validators.required
      ])),
      password: new FormGroup("", Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      rpassword: new FormGroup('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      phone: new FormGroup("", Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14)
      ])),
      email: new FormGroup('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),

      check: ['boolean', Validators.required]
    }),
    {
      validators: this.password.bind(this)
    };
  }




  ngOnInit() { }
  
  password(reactiveForm: FormGroup) {
    const  password  = reactiveForm.get('password');
    const rpassword  = reactiveForm.get('rpassword');
    return password === rpassword ? null : { passwordNotMatch: true };
  }
  // registerUser(){
  //   this._log.registerUser(this.registerUser)
  //   .subscribe (
  //     res => console.log(res)
  //     err  console.log(err)
  //   )
  // }

  onSubmit() {
    console.log(this.reactiveForm.value)
    // const resul = `
    //   <p>
    //   Name: ${this.reactiveForm.value.lname} ${this.reactiveForm.value.fname}
    //   <br>
    //   Email: ${this.reactiveForm.value.email}
    //   <br>
    //   phone: ${this.reactiveForm.value.phone}
    //   <br>
    //   </p>
    //   `
    // this.notification = 'show';
    // // this._logServices.sendMail(resul)
    // this.err_msg =
    //   'Your information is in proccess. <br> Please check your mail for futher response.';
    // setTimeout(() => {
    //   this.notification = 'hide';
    // }, 30000);
  }
}
 