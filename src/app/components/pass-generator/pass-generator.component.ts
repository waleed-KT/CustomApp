import { Component, Input, OnInit } from '@angular/core';
import { randWords } from '../../wordsData';

@Component({
  selector: 'app-pass-generator',
  templateUrl: './pass-generator.component.html',
  styleUrls: ['./pass-generator.component.scss']
})
export class PassGeneratorComponent implements OnInit {
  private randomWords = randWords;
  public sliderValue = 16;
  public upperCaseChecked: boolean = true;
  public lowerCaseChecked: boolean = false;
  public numbersCaseChecked: boolean = false;
  public symbolsCaseChecked: boolean = false;
  public wordsCaseChecked: boolean = false;

  private generatePasswordString: string = "Click Generate";
  private noResult: string = " and Must Select an Option"
  public generatedPassword: string = this.generatePasswordString;

  private letters = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  private numerics = '0123456789';
  private simbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
  constructor() { }
  ngOnInit(): void { }
  
  public onGenerateClick() {
    let password = '';
    let passChars: any;
    if (this.wordsCaseChecked) {
      passChars = this.randomWords;
    } else {
      if (this.upperCaseChecked) passChars += this.letters.toUpperCase();
      if (this.lowerCaseChecked) passChars += this.letters;
      if (this.numbersCaseChecked) passChars += this.numerics;
      if (this.symbolsCaseChecked) passChars += this.simbols;
    }
      if (this.generatedPassword == '') this.generatedPassword = this.generatePasswordString + this.noResult;
    else {
      while( password.length < this.sliderValue ) {
        debugger;
        const index = Math.floor(Math.random()* passChars.length-1);
        password += passChars[index];
      }
      this.generatedPassword = password;
    }
  }

  public upperCaseChange(uppercaseValue : any) {
    this.upperCaseChecked = uppercaseValue.target.checked;
    this.wordsCaseChecked = false;
  }

  public lowerCaseChange(lowerCaseChecked : any) {
    this.lowerCaseChecked = lowerCaseChecked.target.checked;
    this.wordsCaseChecked = false;
  }

  public numberCaseChange(numbersCaseChecked : any) {
    this.numbersCaseChecked = numbersCaseChecked.target.checked;
    this.wordsCaseChecked = false;
  }

  public symbolCaseChange(symbolCaseChange : any) {
    this.symbolsCaseChecked = symbolCaseChange.target.checked;
    this.wordsCaseChecked = false;
  }

  public wordCaseChange(wordsCase: any) {
    this.wordsCaseChecked = wordsCase.target.checked;
    this.upperCaseChecked = false;
    this.lowerCaseChecked = false;
    this.numbersCaseChecked = false;
    this.symbolsCaseChecked = false;
  }
}

