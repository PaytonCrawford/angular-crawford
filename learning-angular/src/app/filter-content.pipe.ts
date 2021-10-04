import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(content: Content, contentType: string): string {
    return content.type || contentType || "Default Type"
  }

}
