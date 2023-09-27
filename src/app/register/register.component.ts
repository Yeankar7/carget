import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string;
  company: string;
  site: string;

  employees:any[] | undefined;

  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.reactiveForm = this.fb.group({

      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.pattern("^[234]\\d{10}$")],
      country: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(12)],
      rpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12), compareValidators('password')]],
      check: ['', Validators.required],

    });

    function compareValidators(otherControlName:string) {

      let thiscontrol:FormControl;
      let othercontrol: FormControl;

       return (control: FormControl) {
        if (!control.parent) {
          return null;
        }
        //first
        thiscontrol = control;

        //other
        othercontrol = thiscontrol.parent?.get(otherControlName) as FormControl;
        othercontrol.valueChanges.subscribe(()=> {
          thiscontrol.updateValueAndValidity();
        }
        );

        
        //compare expecially password 
        if (othercontrol.value != thiscontrol.value) {
          return {
            matchValue:true
          };
        }
        return null;
      }
      
    }



    this.name = 'jenty';
    this.company = 'gentry';
    this.site = 'gentryschools.com';
    
    this.employees = [
      {name:'jenty', address:'7 street', contact:'9034017696', salary: '50000', joining: 'new Date()' },
      {name:'jentyfsss', address:'street', contact:'903456496', salary: '55000', joining: 'new Date()' },
      {name:'jentasy', address:'6 street', contact:'9034665696', salary: '30000', joining: 'new Date()' },
    ];
  }
  greet() {
    alert ('hi, ${this.name}')
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
