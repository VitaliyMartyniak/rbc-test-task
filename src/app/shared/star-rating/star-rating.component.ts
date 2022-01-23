import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  @Input() rating: number

  constructor() {
  }

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return 5 - Math.ceil(this.rating);
  }

  get fullStars(): number[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): number[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

}
