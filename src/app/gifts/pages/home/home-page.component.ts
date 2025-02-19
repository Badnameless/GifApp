import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifts';

@Component({
  selector: 'gifts-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifService:GiftsService){}

  get gifs(): Gif[]{
    return this.gifService.gifList;
  }
}
