import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

import * as $ from 'jquery';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _masonry: Masonry;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    let masonryRoot = $(this._element.nativeElement).find('.masonry')[0];
    if (masonryRoot) {
      this._masonry = new Masonry(masonryRoot, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
      }); 
    }
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._masonry.destroy()
    }
  }

}
