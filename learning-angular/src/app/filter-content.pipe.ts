import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentType: string, ...content: Content[]) {
    return content.filter(c => c.type != null ? c.type.length : null);
  }
}
