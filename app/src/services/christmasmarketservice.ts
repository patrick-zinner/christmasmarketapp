
import {Christmasmarket} from '../model/christmasmarket';
import {MARKETS} from '../model/christmasmarketmockdata';
import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { HttpErrorResponse } from "@angular/common/http";
import { MarketWrapper } from "./marketwrapper";

@Injectable()
export class ChristmasMarketService {

  constructor(public http: HttpClient) {

  }

  apiUrl: string = 'http://localhost:8080/christmasmarkets/'


  getMarkets(): Observable<Christmasmarket[]> {
    let markets: Christmasmarket[];
    return this.http.get<MarketWrapper>(this.apiUrl).map(this.extractData);

  }

  private extractData(res: MarketWrapper) {

    let body = res.results;
    console.log(body);
    body.forEach((d) => {
      d.start = new Date(d.start)
      d.end = new Date(d.end);
      d.extraordinaryOpeningHours.forEach(eooh => {
          eooh.date = new Date(eooh.date);
      });
    });
    return body;
  }






  rateMarket(marketId: number, rating: number, ratingPrice: number) {
    console.log('ratedMarket');
  }

}
