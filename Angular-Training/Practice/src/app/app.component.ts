import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = '';
  public myId = "testId";
  public greet = "";

  title = 'Practice';

  onClick(event){
    this.name = ""
    this.greet = event;
  }
}
