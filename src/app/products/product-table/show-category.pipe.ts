import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'showCategory'
})
export class ShowCategoryPipe implements PipeTransform {

  transform(value): string {
    switch (value) {
      case 'FAST_FOOD':
        return '速食🍕';
      case 'VEGES':
        return '蔬菜🥬';
      case 'CANDY':
        return '糖果🍬';
      default:
        return '';
    }

  }

}
