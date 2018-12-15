
import {Christmasmarket} from '../model/christmasmarket';
import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import { MarketWrapper } from "./marketwrapper";
import { UserService } from "./user.service";
import { SingleRating } from "../model/singlerating";
import { Storage } from '@ionic/storage';

@Injectable()
export class ChristmasMarketService {

  private getDataObserver: any;
  public getData: any;

  constructor(
    public http: HttpClient,
    private userService: UserService,
    public storage: Storage) {
    this.getDataObserver = null;
    this.getData = Observable.create(observer => {
      this.getDataObserver = observer;
    });
  }



  apiUrl: string = 'http://134.255.219.6:8080/christmasmarkets/christmasmarkets';
  //apiUrl: string = 'http://192.168.0.20:8080/christmasmarkets';

  getMarkets() {

    this.http.get<MarketWrapper>(this.apiUrl).map(res => {
      let markets = this.extractData(res);
      this.storage.set('markets', markets);
      return markets;
    }).catch(err => {
      return this.loadMarketsFromStorage();
    }).subscribe(markets => {
      this.getDataObserver.next(markets)
    });

  }

  public remapDates(market: Christmasmarket) {
    market.start = new Date(market.start)
    market.end = new Date(market.end);
    market.extraordinaryOpeningHours.forEach(eooh => {
      eooh.date = new Date(eooh.date);
    });
  }

  public loadMarketsFromStorage(): Promise<Christmasmarket[]> {
    return this.storage.get('markets').then(data => {
      let markets = <Christmasmarket[]>data;
      markets.forEach(this.remapDates);
      return markets;
    });

  }

  private extractData(res: MarketWrapper) {

    let body = res.results;
    body.forEach(this.remapDates);
    return body;
  }

  loadMarket(marketId: number): Promise<Christmasmarket> {
    return this.storage.get('markets').then(markets => markets.filter(m => m.id == marketId)[0]);
  }

  findRatingOfMarket(marketId: number): Promise<SingleRating> {
    return this.userService.getAndCreateUser().then(user => {
      return this.http.get<SingleRating>(this.apiUrl + '/rating/' + marketId + '/user/' + user.uniqueId).toPromise();
    });
  }

  rateMarket(marketId: number, rating: number, ratingPrice: number): Promise<Christmasmarket> {
    return this.userService.getAndCreateUser().then(user => {
      let requestObj = {
        marketId: marketId,
        userId: user.uniqueId,
        rating: rating,
        ratingPrice: ratingPrice
      };

      let observable = this.http.post<Christmasmarket>(this.apiUrl + '/rate', requestObj).map((market: Christmasmarket) => {
        this.loadMarketsFromStorage().then(allMarkets => {
          for (let i = 0; i < allMarkets.length; i++) {
            if (allMarkets[i].id == market.id) {
              this.remapDates(market);
              allMarkets[i] = market;
              break;
            }
          }
          this.storage.set('markets', allMarkets);
          this.getDataObserver.next(allMarkets);
          return market;
        });
        this.remapDates(market);
        return market;
      });
      return observable.toPromise();
    });
  }

}
