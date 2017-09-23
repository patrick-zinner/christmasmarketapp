import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'marketoverview.html'
})
export class MarketoverviewPage {

  tabList = ListPage;
  tabMap = MapPage;

  constructor() {

  }
}
