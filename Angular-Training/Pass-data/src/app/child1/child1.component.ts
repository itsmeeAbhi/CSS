import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {
  @Input() data: string;

  message = "Pass Message to Parent"
  @Output() event = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onClickbutton(){
    this.event.emit(this.message);
  }

}
