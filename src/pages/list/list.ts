import {Christmasmarket} from '../../model/christmasmarket';
import {LatLng} from '../../model/latlng';
import {ChristmasMarketService} from '../../services/christmasmarketservice';
import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {NavController, IonicApp, App} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import { OpeninghoursService } from "../../services/openinghoursservice";
import { MarketDetailPage } from "../marketdetail/marketdetail";

@Component({
  selector: 'page-home',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  markets: Christmasmarket[];
  location: LatLng;

  openingHours: { [id: number]: boolean; } = {};

  constructor(
    private christmasmarketService: ChristmasMarketService,
    public navCtrl: NavController,
    private openinghoursService: OpeninghoursService,
    private geolocation: Geolocation,
    private app: App
  ) {

    let watch = this.geolocation.watchPosition({ maximumAge: 5000, enableHighAccuracy: false });
    watch.subscribe((data) => {
      if (data.coords !== undefined) {
        this.location = { latitude: data.coords.latitude, longitude: data.coords.longitude };
        console.log('lat: ' + data.coords.latitude + ', lon: ' + data.coords.longitude);
      }
    });

  }

  public onClickMarket(market) {

    this.app.getRootNav().push(MarketDetailPage, { data: market });
    //this.navCtrl.push(MarketDetailPage, {data: market});
  }

  initCache() {
    for (let market of this.markets) {
      let serviceResult = this.openinghoursService.isOpenAt(market, new Date());
      this.openingHours[market.id] = serviceResult;
    }
  }

  ngOnInit() {
    this.christmasmarketService.getMarkets().then(markets => {
      this.markets = markets;
      this.initCache();
    });
  }

  ngOnDestroy() {

  }

  startObservingGeolocation() {

  }


}
