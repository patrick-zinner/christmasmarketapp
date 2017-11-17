import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'price-category',
  templateUrl: 'pricecategory.component.html'
})
export class PriceCategoryComponent implements OnInit {

  @Input() rating: number;
  @Input() showText: boolean = true;
  @Input() noRatingsText;

  roundedRating: number;
  colors: Array<string>;

  constructor(private translate: TranslateService){

  }

  ngOnInit(): void {

      if(!this.noRatingsText){
          this.translate.get('RATINGS.NORATINGSYET').subscribe(text => this.noRatingsText = text);
      }

    this.colors = [];

    //if the rating is 2.3 display 2 black symbols and 3 grey ones,
    //if its 2.5 or higher, display 3 black symbols and 2 grey ones
    let blackSymbols = Math.floor(this.rating);
    let decimalNums = this.rating - blackSymbols;
    if (decimalNums >= 0.5) {
      blackSymbols++;
    }

    this.roundedRating = blackSymbols;

    for (let i = 0; i < blackSymbols; i++) {
      this.colors.push('black');
    }

    for (let i = this.colors.length; i < 5; i++) {
      this.colors.push('grey');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
      this.ngOnInit();
  }

}
