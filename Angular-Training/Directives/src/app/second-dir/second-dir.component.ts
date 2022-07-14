import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-dir',
  templateUrl: './second-dir.component.html',
  styleUrls: ['./second-dir.component.css']
})
export class SecondDirComponent implements OnInit {
  public color="Orange";
  constructor() { }

  ngOnInit() {
  }

}
