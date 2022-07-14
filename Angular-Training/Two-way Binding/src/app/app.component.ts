import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two-way-bind';
  public name = "";

  // Trying to access private members using getters and setters
  private _userName: string = "Hey User Name Accessed";

  get userName(): string{
    return this._userName;
  }
  set userName(val: string) {
    this._userName= val;
  } 
}
