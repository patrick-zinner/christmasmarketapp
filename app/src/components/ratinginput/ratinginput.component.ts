import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'rating-input',
  templateUrl: 'ratinginput.component.html'
})
export class RatingInputComponent{

  @Input() @Output() rating: number;
  @Input() symbol: string = 'star';
  @Input() texts : Array<string>;

  @Output() ratingChange = new EventEmitter();

  possibleRatings: Array<number> = [1, 2, 3, 4, 5];

  onClickRating(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }


}
