import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Christmasmarket } from "../../../model/christmasmarket";
import { ChristmasMarketService } from "../../../services/christmasmarketservice";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'rating-dialog',
  templateUrl: 'ratingdialog.component.html'
})
export class RatingDialogComponent implements OnInit {


  rating: number;
  ratingPrice: number;

  ratingTexts: Array<string>;
  ratingPriceTexts: Array<string>;

  market: Christmasmarket;

  meinval: String;
  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private christmasMarketService: ChristmasMarketService,
    private translate: TranslateService
  ) {

  }

  ngOnInit(): void {

    this.translate.get('RATINGTEXTS').subscribe(res => {
      this.ratingTexts = [];
      this.ratingTexts.push(res['VALUE1']);
      this.ratingTexts.push(res['VALUE2']);
      this.ratingTexts.push(res['VALUE3']);
      this.ratingTexts.push(res['VALUE4']);
      this.ratingTexts.push(res['VALUE5']);
    });


    this.translate.get('RATINGPRICETEXTS').subscribe(res => {
      this.ratingPriceTexts = [];
      this.ratingPriceTexts.push(res['VALUE1']);
      this.ratingPriceTexts.push(res['VALUE2']);
      this.ratingPriceTexts.push(res['VALUE3']);
      this.ratingPriceTexts.push(res['VALUE4']);
      this.ratingPriceTexts.push(res['VALUE5']);
    });

    this.market = this.navParams.get('data');
    this.rating = 0;
    this.ratingPrice = 0;

    this.christmasMarketService.findRatingOfMarket(this.market.id).then(rating => {

      if (rating) {
        this.rating = rating.rating;
        this.ratingPrice = rating.ratingPrice;
      }
    }).catch(e => {

        console.log(e);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(this.market);
  }

  saveRating() {
    this.christmasMarketService.rateMarket(this.market.id, this.rating, this.ratingPrice).then(market => {
      this.market = market;
      this.dismiss();
      console.log(market);
  }).catch(e => {
      console.log(e);
  });

  }




}
