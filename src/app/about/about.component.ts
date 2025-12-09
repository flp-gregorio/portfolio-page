import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
  }

}
