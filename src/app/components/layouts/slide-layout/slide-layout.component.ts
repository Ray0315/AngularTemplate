import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-layout',
  templateUrl: './slide-layout.component.html',
  styleUrls: ['./slide-layout.component.css']
})
export class SlideLayoutComponent implements OnInit {

  x : Function = () => 1 + 1;

  constructor() { }

  ngOnInit() {
    console.log(this.x());
  }

}
