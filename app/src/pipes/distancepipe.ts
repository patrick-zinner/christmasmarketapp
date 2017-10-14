
import {LatLng} from '../model/latlng';
import {LatLngService} from '../services/latlngservice';
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'distance'})
export class DistancePipe implements PipeTransform {

  constructor(private latLngService: LatLngService) {

  }

  transform(value: LatLng, location: LatLng): number {
    if (location)
      return this.latLngService.calculateDistance(value, location);
    else
      return null;

  }
}