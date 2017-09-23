
import {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
@Pipe({name: 'distanceunit'})
export class DistanceUnitPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      if (value > 1000) {
        let kilometers = value / 1000;
        kilometers = Math.floor(kilometers * 10) / 10;
        return kilometers.toLocaleString() + " km";
      }
      return Math.floor(value) + " m";
    }
    return null;
  }

}