import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-dir',
  templateUrl: './first-dir.component.html',
  styleUrls: ['./first-dir.component.css']
})
export class FirstDirComponent implements OnInit {
  dispName=true;
  task = true;
  constructor() { }

  ngOnInit() {
  }

}
