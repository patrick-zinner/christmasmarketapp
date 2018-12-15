

import { PipeTransform, Pipe } from "@angular/core";
import { LocalizedDatePipe } from "./localized-date.pipe";

@Pipe({ name: 'minutes' })
export class MinutePipe implements PipeTransform {

  constructor(
    private datepipe: LocalizedDatePipe) {

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
