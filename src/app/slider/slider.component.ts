import { Component, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent   {

  images = ["search", "study", "ask"].map((n) => `../../assets/images/${n}.png`);

  constructor( ) {  }
    ngAfterViewInit(): void {
    
    }

    
}
