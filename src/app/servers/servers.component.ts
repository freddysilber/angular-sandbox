import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false
  serverCreationStatus: String = 'No Server was ceated!'
  serverName: String = 'Test server here'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
    console.log('ng On Init')
  }

  onCreateServer = () => {
    console.log('on create server')
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
  }

  onUpdateServerName = (event: any) => {
    console.log(event)
    console.log(event.data, event.target.value)
    // this.serverName = event.target.value
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
