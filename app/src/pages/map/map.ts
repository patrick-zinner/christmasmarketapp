import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMapOptions, GoogleMap, GoogleMapsEvent } from "@ionic-native/google-maps";
import { ChristmasMarketService } from "../../services/christmasmarketservice";

@Component({
  selector: 'page-about',
  templateUrl: 'map.html'
})

export class MapPage {

  mapElement: HTMLElement;
  map: GoogleMap;


  constructor(
    private googleMaps: GoogleMaps,
    private christmasMarketService: ChristmasMarketService
  ) {

  }

  ionViewDidLoad() {
    this.loadMap();
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

    this.map = new GoogleMap(this.mapElement, mapOptions);
    //drop a marker to the market's position
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
          this.christmasMarketService.getMarkets().subscribe(markets => {
              markets.forEach(market => {
                  this.map.addMarker({
                    title: market.name,
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                      lat: market.position.latitude,
                      lng: market.position.longitude
                    }
                  });
              })
          });

      });
  }

}

const viennaLat: number = 48.208174;
const viennaLng: number = 16.373819;
