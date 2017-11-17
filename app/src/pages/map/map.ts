import { Component, NgZone } from '@angular/core';
import { GoogleMapOptions, GoogleMap, GoogleMapsEvent, GoogleMaps } from "@ionic-native/google-maps";
import { ChristmasMarketService } from "../../services/christmasmarketservice";
import { Christmasmarket } from "../../model/christmasmarket";
import { OpeninghoursService } from "../../services/openinghoursservice";
import { App, NavController, ModalController, Events } from "ionic-angular";
import { MarketDetailPage } from "../marketdetail/marketdetail";

declare var google;


@Component({
  selector: 'page-about',
  templateUrl: 'map.html'
})

export class MapPage {

  mapElement: HTMLElement;
  map: GoogleMap;
  markets: Christmasmarket[];

  constructor(
    private christmasmarketService: ChristmasMarketService,
    private openinghoursService: OpeninghoursService,
    private app: App,
    private modalCtrl: ModalController,
    private googleMaps: GoogleMaps,
    private events: Events,
    private ngZone: NgZone
  ) {

  }


  ionViewDidLoad() {
    this.loadMap();
    this.events.subscribe('market-detail-closed', () => {
        this.map.setVisible(true);
        this.map.setClickable(true);

    });
}

  loadMap() {
    this.mapElement = document.getElementById('map');



    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: viennaLat,
          lng: viennaLng
        },
        zoom: 10,
        tilt: 0
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    //drop a marker to the market's position
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        this.christmasmarketService.getData.subscribe(markets => {
          this.markets = markets;
          this.putMarkersForMarkets(markets);
        });
        this.christmasmarketService.getMarkets();
      });
  }

  putMarkersForMarkets(markets: Christmasmarket[]) {


    markets.forEach(market => {
      let isOpen = this.openinghoursService.isOpenAt(market, new Date());
      this.map.addMarker({
        title: market.name,
        icon: isOpen ? 'green' : 'red',
        animation: 'DROP',
        position: {
          lat: market.position.latitude,
          lng: market.position.longitude
        }
      }).then(marker => {
        marker.on(GoogleMapsEvent.INFO_CLICK)
          .subscribe(() => {
             this.ngZone.run(() => this.onClickMarket(market));
          });
      });;

    });
  }

  onClickMarket(market: Christmasmarket) {
      this.map.setVisible(false);
      this.map.setClickable(false);
    this.app.getRootNav().push(MarketDetailPage, { data: market });
  }

}



const viennaLat: number = 48.208174;
const viennaLng: number = 16.373819;
