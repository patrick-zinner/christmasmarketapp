import { Component } from '@angular/core';
import { NavParams, ModalController } from "ionic-angular";
import { Christmasmarket } from "../../model/christmasmarket";
import {Geolocation} from '@ionic-native/geolocation';
import { LatLng } from "../../model/latlng";
import {OnInit} from '@angular/core';
import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { RatingDialogComponent } from "./ratingdialog/ratingdialog.component";
import { ChristmasMarketService } from "../../services/christmasmarketservice";


@Component({
  selector: 'marketdetail',
  templateUrl: 'marketdetail.html'
})
export class MarketDetailPage implements OnInit {

  market: Christmasmarket;
  dayOfWeek: number;
  public showAllHours: boolean;
  public location: LatLng;
  map: GoogleMap;
  mapElement: HTMLElement;
  subscription: any;

  constructor(
    private navParams: NavParams,
    private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,
    private modalCtrl: ModalController,
    private christmasmarketService: ChristmasMarketService

  ) {
    this.market = this.navParams.get('data');
    this.dayOfWeek = (new Date()).getDay();
    this.showAllHours = false;
  }

   ngOnInit() {
       this.initGeoLocation();
   }

  private initGeoLocation(){
      //subscribe to the geolocation api
      let watch = this.geolocation.watchPosition({ maximumAge: 5000, enableHighAccuracy: false });
      this.subscription = watch.subscribe((data) => {
        if (data.coords !== undefined) {
          this.location = { latitude: data.coords.latitude, longitude: data.coords.longitude };
        }
      });
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  startNavigation(){
      //start navigation to market
      let options: LaunchNavigatorOptions = {
        destinationName: this.market.name
      };

      this.launchNavigator.navigate([this.market.position.latitude, this.market.position.longitude], options);
  }

  loadMap() {
    this.mapElement = document.getElementById('detailmap');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.market.position.latitude,
          lng: this.market.position.longitude
        },
        zoom: 16,
        tilt: 30
      }
    };

    this.map =new GoogleMap(this.mapElement, mapOptions);
    //drop a marker to the market's position
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        this.map.addMarker({
            title: this.market.name,
            icon: 'red',
            animation: 'DROP',
            position: {
                lat: this.market.position.latitude,
                lng: this.market.position.longitude
            }
          });
      });
  }

  showRatingDialog(){
      const modal = this.modalCtrl.create(RatingDialogComponent, {data: this.market});
      modal.present();
      modal.onDidDismiss(data => {
          this.christmasmarketService.loadMarket(this.market.id).then(market => this.market = market);
      });
  }

  toggleShowAllHours() {
    this.showAllHours = !this.showAllHours;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
