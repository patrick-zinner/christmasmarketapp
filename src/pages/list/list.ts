import {Christmasmarket} from '../../model/christmasmarket';
import {LatLng} from '../../model/latlng';
import {ChristmasMarketService} from '../../services/christmasmarketservice';
import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  markets: Christmasmarket[];
  location: LatLng;


  constructor(
    private christmasmarketService: ChristmasMarketService,
    public navCtrl: NavController,
    private geolocation: Geolocation
  ) {

    let watch = this.geolocation.watchPosition({maximumAge: 5000, enableHighAccuracy: false});
    watch.subscribe((data) => {
      if (data.coords !== undefined){
        this.location = {latitude: data.coords.latitude, longitude: data.coords.longitude};
        console.log('lat: ' + data.coords.latitude + ', lon: ' + data.coords.longitude);
      }
    });

  }



  ngOnInit() {
    this.christmasmarketService.getMarkets().then(markets => this.markets = markets);
  }

  ngOnDestroy() {

  }

  startObservingGeolocation() {

  }


}
