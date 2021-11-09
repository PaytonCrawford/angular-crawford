import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(content: Content[], type: string): Content[] {
    return content.filter(item => item.type == type);
  }

}
