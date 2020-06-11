import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No Server was ceated!'
  serverName: string = 'Test server here'
  serverCreated: boolean = false
  servers = ['test server', 'test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
    console.log('ng On Init is a hook!')
  }

  onCreateServer = () => {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
  }

  onUpdateServerName = (event: any) => {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
