import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minePipe',
  pure: false
})
export class MinePipePipe implements PipeTransform {

  transform(value: string): number {
    return 123;
  }

}
