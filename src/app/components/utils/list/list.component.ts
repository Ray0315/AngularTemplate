import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() dataIn;
  @Output() dataOut = new EventEmitter;
  counter:number=0;


  constructor() { }

  ngOnInit() {
    console.log(this.dataIn);
  }

  increment(){
    this.counter = this.counter + 1;
    this.dataOut.emit(this.counter);
    
  }

}

