import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myencrpt'
})
export class MyencrptPipe implements PipeTransform {

  transform(value: string,value2="2458"): string {
    let newString:string=""
    let j:number =0;
    let vovel:string[]=['a','e','i','o','U','A','E','I','O','U']
    for(let i=0;i<value.length;i++)
    {
    if(vovel.indexOf(value[i]) == -1)
    {
     
      newString+=value[i];
    }
    else{

      newString+=value2[j];

      j+=1;

      if(j>=4)

      {

        j=0;

      }
    }
    }
    return newString;
  }

}
