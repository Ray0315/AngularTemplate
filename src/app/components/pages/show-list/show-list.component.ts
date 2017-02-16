import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  data: any = ["First", "Second", "Third", "Fourth", "Fifth"];

  constructor() { }

  ngOnInit() {
  }

  show(e) {
    console.log(e);
  }

}
