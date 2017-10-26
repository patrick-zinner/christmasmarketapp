
import {Christmasmarket} from '../model/christmasmarket';
import {MARKETS} from '../model/christmasmarketmockdata';
import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { HttpErrorResponse } from "@angular/common/http";
import { MarketWrapper } from "./marketwrapper";
import { UserService } from "./user.service";
import { User } from "../model/user";
import { SingleRating } from "../model/singlerating";

@Injectable()
export class ChristmasMarketService {

  constructor(
    public http: HttpClient,
    private userService: UserService) {

  }

  apiUrl: string = 'http://192.168.1.170:8080/christmasmarkets'


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

  findRatingOfMarket(marketId: number) : Promise<SingleRating> {
      return this.userService.getAndCreateUser().then(user =>  {
         return this.http.get<SingleRating>(this.apiUrl + '/rating/' + marketId + '/user/' + user.uniqueId).toPromise();
      });
  }

  rateMarket(marketId: number, rating: number, ratingPrice: number) {
    let user = this.userService.getAndCreateUser().then(user => {
      let requestObj = {
        marketId: marketId,
        userId: user.uniqueId,
        rating: rating,
        ratingPrice: ratingPrice
      };

      this.http.post(this.apiUrl + '/rate', requestObj).subscribe(resp => {
          let text = resp ? resp : 'leer';
        console.log(text);
      });
    });
  }

}
