import { Component, NgZone } from '@angular/core';
import { GoogleMapOptions, GoogleMap, GoogleMapsEvent, GoogleMaps, Marker } from "@ionic-native/google-maps";
import { ChristmasMarketService } from "../../services/christmasmarketservice";
import { Christmasmarket } from "../../model/christmasmarket";
import { OpeninghoursService } from "../../services/openinghoursservice";
import { App, NavController, ModalController, Events } from "ionic-angular";
import { MarketDetailPage } from "../marketdetail/marketdetail";
import { Observable } from "rxjs/Observable";

declare var google;


@Component({
  selector: 'page-about',
  templateUrl: 'map.html'
})

export class MapPage {

  mapElement: HTMLElement;
  map: GoogleMap;
  markets: Christmasmarket[];
  markers: Map<number, Marker>;

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
        Observable.interval(1000*60).subscribe(() => this.updateOpenStatus());
        this.christmasmarketService.getData.subscribe(markets => {
          this.markets = markets;
          this.putMarkersForMarkets(markets);
        });
        this.christmasmarketService.getMarkets();
      });
  }

  updateOpenStatus() {
    for (let market of this.markets) {
      let marker = this.markers.get(market.id);
      let isOpen = this.openinghoursService.isOpenAt(market, new Date());
      let icon =  isOpen ? 'green' : 'red';
      marker.setIcon(icon);
    }
  }

  putMarkersForMarkets(markets: Christmasmarket[]) {
    this.markers = new Map<number, Marker>();
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
        this.markers.set(market.id, marker);
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
