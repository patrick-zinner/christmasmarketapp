
import {LatLng} from '../model/latlng';
import {Injectable} from '@angular/core';
@Injectable()
export class LatLngService {

  calculateDistance(pos1: LatLng, pos2: LatLng): number {
    let earthRadius = 6371000; //meters
    let dLat = this.deg2rad(pos2.latitude - pos1.latitude);
    let dLng = this.deg2rad(pos2.longitude - pos1.longitude);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(pos1.latitude)) * Math.cos(this.deg2rad(pos2.latitude)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let dist = (earthRadius * c); 

    return dist;
  }

  deg2rad(deg): number {
    return deg * (Math.PI / 180)
  }


}