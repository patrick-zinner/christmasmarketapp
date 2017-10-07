import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Christmasmarket } from "../../model/christmasmarket";


@Component({
  selector: 'marketdetail',
  templateUrl: 'marketdetail.html'
})
export class MarketDetailPage {

  market: Christmasmarket;
  dayOfWeek: number;
  public showAllHours: boolean;

  constructor(
    private navParams: NavParams
  ) {
    this.market = this.navParams.get('data');
    this.dayOfWeek = (new Date()).getDay();
    this.showAllHours = false;

  }

  toggleShowAllHours(){
      this.showAllHours = !this.showAllHours;
  }
}
