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
import { RatingsComponent } from "../components/ratings/ratings.component";
import { GoogleMaps } from "@ionic-native/google-maps";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { PriceCategoryComponent } from "../components/pricecategory/pricecategory.component";
import { RatingDialogComponent } from "../pages/marketdetail/ratingdialog/ratingdialog.component";
import { RatingInputComponent } from "../components/ratinginput/ratinginput.component";
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage/es2015";
import { UserService } from "../services/user.service";
import { MarketSortPipe } from "../pipes/market-sort";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from "../utils/createTranslateLoader";
import { HttpClient } from "@angular/common/http";
import { Globalization } from '@ionic-native/globalization';
import { LocalizedDatePipe } from "../pipes/localized-date.pipe";

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
    MarketSortPipe,
    MinutePipe,
    RatingsComponent,
    OpeningHoursPipe,
    PriceCategoryComponent,
    RatingDialogComponent,
    RatingInputComponent,
    LocalizedDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages:true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    DistancePipe,
    OpeningHoursPipe,
    MarketSortPipe,
    GoogleMaps,
    LaunchNavigator,
    UserService,
    Globalization,
    LocalizedDatePipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler }


  ]
})
export class AppModule { }
