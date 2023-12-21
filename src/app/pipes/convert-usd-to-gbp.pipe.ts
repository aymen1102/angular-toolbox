import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUsdToGbp'
})
export class ConvertUsdToGbpPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;
  }

}
