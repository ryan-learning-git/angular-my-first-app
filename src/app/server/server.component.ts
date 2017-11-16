import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  // this allows the class to be used outside of this file

  serverId: number = 10;
  serverStatus: string = 'Offline';

  serverSpace: string = '20 Gb';

  getServerSpace(){ return this.serverSpace; }

}
