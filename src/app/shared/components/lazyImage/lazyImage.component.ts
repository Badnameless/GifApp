import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazyImage.component.html',
  styleUrl: './lazyImage.component.css',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public alt: string = '';

  @Input()
  public url!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error("The gif's url is required.")
  }

  onLoad():void{
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
