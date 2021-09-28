import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
