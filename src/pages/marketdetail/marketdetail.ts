import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";
import { Christmasmarket } from "../../model/christmasmarket";


@Component({
  selector: 'marketdetail',
  templateUrl: 'marketdetail.html'
})
export class MarketDetailPage {

  market: Christmasmarket;

  constructor(
    private navParams: NavParams
  ) {
    this.market = navParams.get('data');

  }
}
