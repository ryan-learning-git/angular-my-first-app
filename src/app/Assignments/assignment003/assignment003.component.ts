import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment003',
  templateUrl: './assignment003.component.html',
  styleUrls: ['./assignment003.component.css']
})
export class Assignment003Component implements OnInit {

  toggleState = false;
  logItems = [];
  count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  buttonPress(){
    this.toggleState = !this.toggleState;
    this.count++;
    this.logItems.push(this.count);
  }

  haveBlue(logItem: number){
    console.log('Checking item ', logItem);
    if (logItem >= 5){
      console.log('Item is blue');
      return true;
    } else {
      console.log('Item is not blue');
      return false;
    }
  }


}
