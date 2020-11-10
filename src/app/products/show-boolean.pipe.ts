import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'showBoolean'
})
export class ShowBooleanPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '是' : '否';
  }

}
