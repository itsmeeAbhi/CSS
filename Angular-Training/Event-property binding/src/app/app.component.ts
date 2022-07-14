import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  title: any = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.title.push(this.title.length+1);
  }
}