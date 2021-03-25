import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color/color';

@Pipe({
  name: 'colorSearch',
})
export class ColorSearchPipe implements PipeTransform {
  transform(value: Color[], filterText: String): Color[] {
    filterText = filterText ? filterText : '';
    return filterText
      ? value.filter(
        (color: Color) =>
          color.colorName
            .toLocaleLowerCase()
            .indexOf(filterText.toString()) !== -1
      )
      : value;
  }
}
