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
import { OpeninghoursService } from "../services/openinghoursservice";
import { OpeningHourStatePipe } from "../pipes/openinghourstatepipe";
import { DatePipe } from "@angular/common";
import { MarketDetailPage } from "../pages/marketdetail/marketdetail";
import { MinutePipe } from "../pipes/minutes.pipe";
import { OpeningHoursPipe } from "../pipes/openinghours.pipe";

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ListPage,
    MarketDetailPage,
    MarketoverviewPage,
    DistancePipe,
    DistanceUnitPipe,
    OpeningHourStatePipe,
    MinutePipe,
    OpeningHoursPipe
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
    MarketoverviewPage,
    MarketDetailPage
  ],
  providers: [
    ChristmasMarketService,
    DatePipe,
    OpeninghoursService,
    LatLngService,
    StatusBar,
    SplashScreen,
    Geolocation,
    MinutePipe,
    OpeningHoursPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
