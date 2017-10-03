

import { OpeninghoursService } from "../services/openinghoursservice";
import { Christmasmarket } from "../model/christmasmarket";
import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({ name: 'openingstate' })
export class OpeningHourStatePipe implements PipeTransform {

  constructor(
    private openinghoursService: OpeninghoursService,
    private datepipe: DatePipe) {

  }

  transform(market: Christmasmarket): string {
    let now = (new Date()).getTime();
    let nowDate = new Date();
    if (market) {
      if (market.start.getTime() > now) {
        //let oh = this.openinghoursService.getOpeningHoursForTime(market, market.start);
        return 'Market not yet started. It will start at ' + this.datepipe.transform(market.start, 'shortDate') + '.';
      } else if (market.end.getTime() < now) {
        return 'Market is already closed for this year.'
      } else {
        let oh = this.openinghoursService.getOpeningHoursForNow(market);
        if (oh.open === true) {
          let openNow = this.openinghoursService.isOpenAt(market, new Date());
          if (openNow) {
            return 'Market open from ' + this.transformMinutes(oh.start) + ' to ' + this.transformMinutes(oh.end);
          } else {
            let currentMinutes = nowDate.getMinutes() + nowDate.getHours() * 60;
            if (oh.start > currentMinutes) {
              return 'Market will open at ' + this.transformMinutes(oh.start);
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

  private transformMinutes(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(mins);
    return this.datepipe.transform(date, 'shortTime');
  }
}
