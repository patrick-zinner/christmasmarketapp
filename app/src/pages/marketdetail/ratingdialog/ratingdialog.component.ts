import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Christmasmarket } from "../../../model/christmasmarket";
import { ChristmasMarketService } from "../../../services/christmasmarketservice";

@Component({
  selector: 'rating-dialog',
  templateUrl: 'ratingdialog.component.html'
})
export class RatingDialogComponent implements OnInit {


  rating: number;
  ratingPrice: number;

  ratingTexts: Array<string> = ['very bad', 'meh', 'okay', 'good', 'awesome'];
  ratingPriceTexts: Array<string> = ['cheap', 'rather cheap', 'average price', 'rather expensive', 'expensive'];

  market: Christmasmarket;


  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private christmasMarketService: ChristmasMarketService,
  ) {

  }

  ngOnInit(): void {
    this.market = this.navParams.get('data');
    this.rating = 0;
    this.ratingPrice = 0;

    this.christmasMarketService.findRatingOfMarket(this.market.id).then(rating => {

      if (rating) {
        this.rating = rating.rating;
        this.ratingPrice = rating.ratingPrice;
      }
    }).catch(e => {

    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveRating() {
    this.christmasMarketService.rateMarket(this.market.id, this.rating, this.ratingPrice);
    this.dismiss();
  }




}
