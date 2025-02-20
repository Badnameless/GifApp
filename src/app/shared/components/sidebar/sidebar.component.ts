import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftsService:GiftsService){}

  get _tags(){
    return this.giftsService.tagHistory;
  }

  public searchByTag(tag:string){
    this.giftsService.searchTag(tag);
  }
}
