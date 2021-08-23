import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1'
})
export class CustomPipe1Pipe implements PipeTransform {

  transform(value: string): unknown {
    return 'Pure Pipe & Length : ' + value.length ;
  }

}
