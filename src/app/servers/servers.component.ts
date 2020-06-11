import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: String = 'No Server was ceated!'
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    console.log('on create server')
    this.serverCreationStatus = 'Server was created!'
  }
}
