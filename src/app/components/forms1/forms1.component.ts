import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {

  constructor() { }

  personalData  = new FormGroup ({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
  });
  
  FormVals : any;
  pipeFirst : any;

  ngOnInit(): void {
    this.pipeFirst = this.personalData.controls['firstName'].value;
  }
  
  submitForm() {
    this.pipeFirst = this.personalData.controls['firstName'].value;

    this.FormVals = 'First Name : ' + this.personalData.controls['firstName'].value + ' & Last Name : ' + this.personalData.controls['lastName'].value;
  }
}
