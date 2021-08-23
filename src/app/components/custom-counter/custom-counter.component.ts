import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements ControlValueAccessor {

  constructor() {}
  
  onChange: any = () => {};
  onTouch: any = () => {};
  val: any = ""; // this is the updated value that the class accesses

  set value(val:any) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
    this.propagateChange(this.val);
  }

  increment() {
    if (this.isNumber(this.val) === true) {
      if (this.val >= 0) {
        this.val++;
        this.propagateChange(this.val);
      }
    }
  }
  decrement() {
    if (this.isNumber(this.val) === true) {
      if (this.val > 0) {
        this.val--;
        this.propagateChange(this.val);
      }
    }
  }
  onKeyDown(keys:any ) {
    switch (keys.keyCode) {
      case 37:
        break;
      case 38:
        this.increment();
        break;
      case 39:
        break;
      case 40:
        this.decrement();
        break;
    }
  }

  // this method sets the value programmatically

  writeValue(values: any) {
    if (values !== undefined) {
      this.value = values;
    }
  }

  isNumber(n:any) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }
  // upon UI element value changes, this method gets triggered
  // registerOnChange(fn: any) {
  //   this.onChange = fn;
  // }
  // upon touching the element, this method gets triggered
  // registerOnTouched(fn: any) {
  //   this.onTouch = fn;
  // }

  propagateChange = (_: any) => {};

  registerOnChange(fn:any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}

export interface ControlValueAccessor {
  writeValue(obj: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
}
