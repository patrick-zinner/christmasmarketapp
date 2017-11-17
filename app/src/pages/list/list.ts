import {Christmasmarket} from '../../model/christmasmarket';
import {LatLng} from '../../model/latlng';
import {ChristmasMarketService} from '../../services/christmasmarketservice';
import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {NavController, App, ModalController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import { OpeninghoursService } from "../../services/openinghoursservice";
import { MarketDetailPage } from "../marketdetail/marketdetail";

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  markets: Christmasmarket[];
  allMarkets: Christmasmarket[];
  location: LatLng;

  openingHours: { [id: number]: boolean; } = {};
  subscription: any;
  searchText: string;

  constructor(
    private christmasmarketService: ChristmasMarketService,
    public navCtrl: NavController,
    private openinghoursService: OpeninghoursService,
    private geolocation: Geolocation,
    private app: App,
    public modalCtrl: ModalController
  ) {

  }

  public onClickMarket(market) {
    this.app.getRootNav().push(MarketDetailPage, { data: market });
  }

  initCache() {
    for (let market of this.markets) {
      let serviceResult = this.openinghoursService.isOpenAt(market, new Date());
      this.openingHours[market.id] = serviceResult;
    }
  }

  ngOnInit() {
    this.christmasmarketService.getData.subscribe(markets => {
      this.markets = markets;
      this.allMarkets = markets;
      this.initCache();
      this.onSearchChange();
    });
    this.christmasmarketService.getMarkets();

    this.initGeoLocation();
  }

  private initGeoLocation() {
    let watch = this.geolocation.watchPosition({ maximumAge: 5000, enableHighAccuracy: false });
    this.subscription = watch.subscribe((data) => {
      if (data.coords !== undefined) {
        this.location = { latitude: data.coords.latitude, longitude: data.coords.longitude };
      }
    });

  }

  onSearchChange() {
    if (this.searchText != null && this.searchText.length > 0) {
      this.markets = this.allMarkets.filter(market => {
        return market.name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0;
      });
    } else {
      this.markets = this.allMarkets;
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




}
