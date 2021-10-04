import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentItem: Content[]) {
    return contentItem.filter(c => c.type != null ? c.type.length : null);
  }

}
