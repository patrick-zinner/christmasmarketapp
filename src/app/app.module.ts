import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {MapPage} from '../pages/map/map';
import {ListPage} from '../pages/list/list';
import {MarketoverviewPage} from '../pages/marketoverview/marketoverview';
import { DistancePipe } from '../pipes/distancepipe';
import { DistanceUnitPipe } from '../pipes/distanceunitpipe';
import {ChristmasMarketService} from '../services/christmasmarketservice';
import {LatLngService} from '../services/latlngservice';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ListPage,
    MarketoverviewPage,
    DistancePipe,
    DistanceUnitPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ListPage,
    MarketoverviewPage
  ],
  providers: [
    ChristmasMarketService,
    LatLngService,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
