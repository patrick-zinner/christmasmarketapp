import {NgModule, ErrorHandler, forwardRef} from '@angular/core';
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
import { RatingsComponent } from "../components/ratings/ratings.component";
import { GoogleMaps } from "@ionic-native/google-maps";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PriceCategoryComponent } from "../components/pricecategory/pricecategory.component";
import { RatingDialogComponent } from "../pages/marketdetail/ratingdialog/ratingdialog.component";
import { RatingInputComponent } from "../components/ratinginput/ratinginput.component";
import { NG_VALIDATORS } from "@angular/forms";

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
    RatingsComponent,
    OpeningHoursPipe,
    PriceCategoryComponent,
    RatingDialogComponent,
    RatingInputComponent
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
    MarketDetailPage,
    RatingDialogComponent
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
    GoogleMaps,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}


  ]
})
export class AppModule {}
