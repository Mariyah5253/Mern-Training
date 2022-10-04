import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  transform(value: number): number {
    value=  Math.sqrt(value)
    return value;
  }

}
