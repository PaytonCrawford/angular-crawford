import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(content: Content[], type: string): Content[] {
    return content.filter(item => item.type == type);
  }

}
