import { Component, OnInit } from '@angular/core';

@Component({
  // Selector can take any standard CSS selector other than #id - recommended to just use an element though for components.
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
