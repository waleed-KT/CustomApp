import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-check-pipes',
  templateUrl: './check-pipes.component.html',
  styleUrls: ['./check-pipes.component.css']
})


export class CheckPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameString:string = '';
  users = [{
      firstName: 'John',
      lastName: 'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11')
    }, 
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23')
    }, 
    {
      firstName: 'Weeknd',
      lastName: 'StarBoy',
      dept: 'Singer',
      salary: 1000000,
      doj: new Date('2019-10-20')
    }
  ]

  addUser(){
    this.users.push({
      firstName: 'John',
      lastName: 'Cena',
      dept: 'Wrestler',
      salary: 60000,
      doj: new Date('2016-09-16')
    })
  }
  reset(){
    this.users = this.users.slice()
  }
}
