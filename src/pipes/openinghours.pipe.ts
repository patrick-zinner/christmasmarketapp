

import { Pipe, PipeTransform } from "@angular/core";
import { Christmasmarket } from "../model/christmasmarket";
import { DatePipe } from "@angular/common";
import { MinutePipe } from "./minutes.pipe";

@Pipe({ name: 'openinghours' })
export class OpeningHoursPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe,
    private minutePipe: MinutePipe
  ) {

  }

  transform(market: Christmasmarket, dayOfWeek: number): string {
    let openingHours = market.openingHours.filter(hour => hour.dayOfWeek === dayOfWeek)[0];
    if (openingHours.open) {
      return this.minutePipe.transform(openingHours.start) + ' - ' + this.minutePipe.transform(openingHours.end);
    } else {
      return 'Closed';
    }
  }
}
