import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})

export class MultiplierPipe implements PipeTransform {

  transform(value: number, exponent:number = 1): number {
    return value ** exponent;
  }
}

