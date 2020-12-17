import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No Server was ceated!'
  serverName: string = 'Test server here'
  serverCreated: boolean = false
  servers = ['test server', 'test server 2']

  constructor(private router: Router, private route: ActivatedRoute) {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
    console.log('ng On Init is a hook!')
  }

  onCreateServer(): void {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
  }

  onUpdateServerName(event: any): void {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  handleDeleteServer(index: number): void {
    this.servers.splice(index, 1)
  }

  onReload(): void {
    console.log('Implement Me!!!')
    // this.router.navigate(['servers'], { relativeTo: this.route })
  }
}
