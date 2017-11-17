import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'ratings',
  templateUrl: 'ratings.component.html'
})
export class RatingsComponent implements OnInit {

  @Input() rating: number;
  @Input() numberOfRatings: number;
  @Input() showText: boolean = true;
  @Input() noRatingsText: string;// = 'no ratings yet';

  stars: Array<string>;

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    if (!this.noRatingsText) {
      this.translate.get('RATINGS.NORATINGSYET').subscribe(text => this.noRatingsText = text);
    }

    this.stars = [];

    let fullStars = Math.floor(this.rating);
    let decimalNums = this.rating - fullStars;
    for (let i = 0; i < fullStars; i++) {
      this.stars.push('star');
    }
    if (decimalNums >= 0.3 && decimalNums <= 0.7) {
      this.stars.push('star-half');
    } else if (decimalNums > 0.7) {
      this.stars.push('star');
    }

    for (let i = this.stars.length; i < 5; i++) {
      this.stars.push('star-outline');
    }

  }

  ngOnChanges(changes: SimpleChanges) {
      this.ngOnInit();
  }


}
