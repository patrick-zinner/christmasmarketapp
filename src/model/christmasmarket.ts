import { LatLng } from './latlng';
import { NormalOpeningHours } from "./normalopeninghours";
import { ExtraordinaryOpeninghours } from "./extraordinaryopeninghours";
export class Christmasmarket {
  id: number;
  name: string;
  start: Date;
  end: Date;
  address: string;
  zipcode: string;
  city: string;
  position: LatLng;
  openingHours: NormalOpeningHours[];
  extraordinaryOpeningHours: ExtraordinaryOpeninghours[];

}
