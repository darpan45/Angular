import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID: number = 12;
  serverStatus: string = 'offline';

  getServerStatus() {
    if (this.serverID == 10) {
      return this.serverStatus;
    } else {
      this.serverStatus = 'Online';
      return this.serverStatus;
    }
  }
}
