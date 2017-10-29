import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'ratings',
  templateUrl: 'ratings.component.html'
})
export class RatingsComponent implements OnInit {

  @Input() rating: number;
  @Input() numberOfRatings: number;
  @Input() showText: boolean = true;
  @Input() noRatingsText = 'no ratings yet';

  stars: Array<string>;

  ngOnInit(): void {
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



}
