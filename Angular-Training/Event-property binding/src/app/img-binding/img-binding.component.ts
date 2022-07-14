import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-binding',
  templateUrl: './img-binding.component.html',
  styleUrls: ['./img-binding.component.css']
})
export class ImgBindingComponent implements OnInit {
  enableButton = false;
  clickButton = 'Button clicked'
  constructor() {
    setTimeout(() => {
      this.enableButton = true;},2000)
   }

  ngOnInit(): void {
  }
  onClickButton(event:Event){
    this.clickButton= 'clickButton';
    console.log(event);
  }
  // onAfterClick(event: Event){
  // this.clickButton = 'Button clicked';

  // }

}
