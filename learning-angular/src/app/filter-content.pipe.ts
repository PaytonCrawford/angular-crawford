import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentItem: Content, type: string): string {
    return contentItem.type || type || "Default Type";
  }

}
