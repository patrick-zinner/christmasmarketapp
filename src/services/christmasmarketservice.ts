
import {Christmasmarket} from '../model/christmasmarket';
import {MARKETS} from '../model/christmasmarketmockdata';
import {Injectable} from '@angular/core';

@Injectable()
export class ChristmasMarketService {

  getMarkets(): Promise<Christmasmarket[]> {
    return Promise.resolve(MARKETS);
  }

}