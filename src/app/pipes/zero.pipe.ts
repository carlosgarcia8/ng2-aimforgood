import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zero'
})
export class ZeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value < 0 ? 0 : value;
  }

}
