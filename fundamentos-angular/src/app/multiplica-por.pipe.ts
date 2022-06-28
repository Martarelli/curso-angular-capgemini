import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
