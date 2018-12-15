

import { OpeninghoursService } from "../services/openinghoursservice";
import { Christmasmarket } from "../model/christmasmarket";
import { Pipe, PipeTransform } from "@angular/core";
import { MinutePipe } from "./minutes.pipe";
import { TranslateService } from "@ngx-translate/core";
import { LocalizedDatePipe } from "./localized-date.pipe";

@Pipe({ name: 'openingstate' })
export class OpeningHourStatePipe implements PipeTransform {

  constructor(
    private openinghoursService: OpeninghoursService,
    private minutePipe: MinutePipe,
    private translate: TranslateService,
    private localizedDate: LocalizedDatePipe) {

  }

  transform(market: Christmasmarket, date?: Date): string {
    let now = null;
    if (date) {
      now = date;
    } else {
      now = (new Date()).getTime();
    }

    let nowDate = new Date();
    if (market) {

      if (market.start.getTime() > now) {
        let param = this.localizedDate.transform(market.start, 'shortDate');
        return this.translate.instant('OPENINGHOURS.NOTYETSTARTED', { 'value': param });
      } else if (market.end.getTime() < now) {
        return this.translate.instant('OPENINGHOURS.ALREADYCLOSEDYEAR');
      } else {
        let oh = this.openinghoursService.getOpeningHoursForNow(market);
        if (oh.open === true) {
          let openNow = this.openinghoursService.isOpenAt(market, new Date());
          if (openNow) {
            return this.translate.instant('OPENINGHOURS.OPENFROMTO', { start: this.minutePipe.transform(oh.start), end: this.minutePipe.transform(oh.end) });
          } else {
            let currentMinutes = nowDate.getMinutes() + nowDate.getHours() * 60;
            if (oh.start > currentMinutes) {
              return this.translate.instant('OPENINGHOURS.WILLOPENAT', { start: this.minutePipe.transform(oh.start) });
            } else {
              return this.translate.instant('OPENINGHOURS.CLOSEDFORTODAY');
            }
          }

        } else {
          return this.translate.instant('OPENINGHOURS.CLOSEDTODAY');
        }
      }
    }
    return '';
  }


}
