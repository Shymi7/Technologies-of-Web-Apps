import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }
    return value.filter(
      val => val.text.toLowerCase().includes(filterText)
    )
  }

}

