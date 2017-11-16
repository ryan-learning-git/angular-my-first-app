import { Component, OnInit } from '@angular/core';

@Component({
  // Selector can take any standard CSS selector other than #id - recommended to just use an element though for components.
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  serverName: string = '';

  constructor() {
    // using () => to allow use of 'this' keyword with an es6 arrow function
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  // not used anymore
  onUpdateServerName(event: any){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(this.serverName);
  }

}
