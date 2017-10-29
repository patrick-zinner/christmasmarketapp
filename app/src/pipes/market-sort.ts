import { Pipe, PipeTransform } from '@angular/core';
import { Christmasmarket } from "../model/christmasmarket";
import { LatLng } from "../model/latlng";
import { DistancePipe } from "./distancepipe";


@Pipe({
  name: 'marketsort',
})
export class MarketSortPipe implements PipeTransform {

  constructor(private distancePipe: DistancePipe) {

  }

  /**
   * Orders the given array by distance to the current position
   */
  transform(value: Array<Christmasmarket>, location: LatLng) {
    if (value) {
      value.sort((a: Christmasmarket, b: Christmasmarket) => {
        let distanceA = this.distancePipe.transform(a.position, location);
        let distanceB = this.distancePipe.transform(b.position, location);
        return distanceA - distanceB;
      });
    }
    return value;
  }
}
