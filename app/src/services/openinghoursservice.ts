

import { Injectable } from "@angular/core";
import { Christmasmarket } from "../model/christmasmarket";
import { OpeningHours } from "../model/openinghours";
import { NormalOpeningHours } from "../model/normalopeninghours";
import { ExtraordinaryOpeninghours } from "../model/extraordinaryopeninghours";

@Injectable()
export class OpeninghoursService {

  public getOpeningHoursForTime(market: Christmasmarket, time: Date): OpeningHours {
    let day = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0, 0);

    let extraordinaryHours = this.findExtraOrdinaryOpeningHours(market, day);
    if (extraordinaryHours != null)
      return extraordinaryHours;
    return this.findNormalOpeningHours(market, day);
  }

  public getOpeningHoursForNow(market: Christmasmarket): OpeningHours {
    return this.getOpeningHoursForTime(market, new Date());
  }

  public isOpenAt(market: Christmasmarket, time: Date): boolean {
    let nowMinutes = time.getHours() * 60 + time.getMinutes();
    if(market.start.getTime() > time.getTime() || market.end.getTime() < time.getTime())
        return false;

    let openingHours = this.getOpeningHoursForTime(market, time);
    if (openingHours.open) {
      if (openingHours.start <= nowMinutes && openingHours.end >= nowMinutes) {
        return true;
      }
    }
    return false;
  }

  private findNormalOpeningHours(market: Christmasmarket, day: Date): NormalOpeningHours {
    let dayOfWeek = day.getDay();
    return market.openingHours.filter(oh => oh.dayOfWeek == dayOfWeek)[0];
  }

  private findExtraOrdinaryOpeningHours(market: Christmasmarket, day: Date): ExtraordinaryOpeninghours {
    for (let extraordinaryHours of market.extraordinaryOpeningHours) {
      if (extraordinaryHours.date.getTime() === day.getTime()) {
        return extraordinaryHours;
      }
    }
    return null;
  }



}
