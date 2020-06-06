import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'msToMinAndSec'})
export class MsToMinAndSecPipe implements PipeTransform {
  transform(value: number): string {
    let seconds = Math.floor((value / 1000) % 60);
    let minutes = Math.floor((value / (1000 * 60)) % 60);
    return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
  }
}
