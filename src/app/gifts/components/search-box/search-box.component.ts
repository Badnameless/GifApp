import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-search-box',
  standalone: false,
  template: `
    <div class="d-flex align-items-center gap-2">
      <h5>Buscar:</h5>
      <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtInputTag>
    </div>

  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(private giftsService:GiftsService){}

  @ViewChild('txtInputTag')
  inputTag!: ElementRef<HTMLInputElement>;

  searchTag(){
    const newTag = this.inputTag.nativeElement.value;
    this.giftsService.searchTag(newTag);
    this.inputTag.nativeElement.value = '';
  }

}
