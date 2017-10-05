

import { DatePipe } from "@angular/common";
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'minutes' })
export class MinutePipe implements PipeTransform {

  constructor(
    private datepipe: DatePipe) {

  }

  transform(minutes: number) : string{
      let hours = Math.floor(minutes / 60);
      let mins = minutes % 60;
      let date = new Date();
      date.setHours(hours);
      date.setMinutes(mins);
      return this.datepipe.transform(date, 'shortTime');
  }


}
