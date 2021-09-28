import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentArray: Content[]) {
    return contentArray.filter(c => c.type != null ? c.type.length : null);
  }

}
