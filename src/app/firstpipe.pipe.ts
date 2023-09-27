import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe'
})
export class FirstpipePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    let result ='';
    for (let i = 0; i < value.length; i++) {
      result = value[i] + result;
    }
      return result;
  }

}
