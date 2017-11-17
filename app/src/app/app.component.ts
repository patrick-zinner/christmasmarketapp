import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Globalization } from '@ionic-native/globalization';

import { MarketoverviewPage } from '../pages/marketoverview/marketoverview';
import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = MarketoverviewPage;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    globalization: Globalization,
    translate: TranslateService) {
    platform.ready().then(() => {
      let defaultLanguage = 'en';

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // if this is a cordova application
      if ((<any>window).cordova) {
        globalization.getPreferredLanguage().then(result => {
          translate.use(result.value);
        })
      } else {
        let browserLanguage = translate.getBrowserLang() || defaultLanguage;
        let language = browserLanguage;
        translate.use(language);
      }
    });
  }
}
