import { Component, OnInit } from '@angular/core';
import { FirstpipePipe } from '../firstpipe.pipe';

@Component({
  selector: 'app-hirecars',
  templateUrl: './hirecars.component.html',
  styleUrls: ['./hirecars.component.css']
})
export class HirecarsComponent implements OnInit {

  employees:any[] | undefined;

  constructor() {
    
    this.employees = [
      {name:'jenty', address:'7 street', contact:'9034017696', salary: '50000', joining: new Date() },
      {name:'jentyfsss', address:'street', contact:'903456496', salary: '55000', joining: new Date() },
      {name:'jentasy', address:'6 street', contact:'9034665696', salary: '30000', joining: new Date() },
    ];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
