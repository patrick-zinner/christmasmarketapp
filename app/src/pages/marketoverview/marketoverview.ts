import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: 'marketoverview.html'
})
export class MarketoverviewPage {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
  }

  tabList = ListPage;
  tabMap = MapPage;

}
