import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifts';

@Component({
  selector: 'gifts-card',
  standalone: false,
  templateUrl: './gifts-card.component.html',
  styleUrl: './gifts-card.component.css'
})
export class GiftsCardComponent {
  @Input()
  public gif!: Gif;
}
