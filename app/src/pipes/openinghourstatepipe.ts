

import { OpeninghoursService } from "../services/openinghoursservice";
import { Christmasmarket } from "../model/christmasmarket";
import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";
import { MinutePipe } from "./minutes.pipe";

@Pipe({ name: 'openingstate' })
export class OpeningHourStatePipe implements PipeTransform {

  constructor(
    private openinghoursService: OpeninghoursService,
    private datepipe: DatePipe,
    private minutePipe: MinutePipe) {

  }

  transform(market: Christmasmarket): string {
    let now = (new Date()).getTime();
    let nowDate = new Date();
    if (market) {
      if (market.start.getTime() > now) {
        //let oh = this.openinghoursService.getOpeningHoursForTime(market, market.start);
        return 'Market will start at ' + this.datepipe.transform(market.start, 'shortDate') + '.';
      } else if (market.end.getTime() < now) {
        return 'Market is already closed for this year.'
      } else {
        let oh = this.openinghoursService.getOpeningHoursForNow(market);
        if (oh.open === true) {
          let openNow = this.openinghoursService.isOpenAt(market, new Date());
          if (openNow) {
            return 'Market open from ' + this.minutePipe.transform(oh.start) + ' to ' + this.minutePipe.transform(oh.end);
          } else {
            let currentMinutes = nowDate.getMinutes() + nowDate.getHours() * 60;
            if (oh.start > currentMinutes) {
              return 'Market will open at ' + this.minutePipe.transform(oh.start);
            } else {
              return 'Market already closed for today';
            }
          }

        } else {
          return 'Market is closed today.';
        }
      }
    }
    return '';
  }


}
