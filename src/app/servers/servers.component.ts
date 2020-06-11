import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',

  // template: `
  //   <div class="serversContainer">
  //   <app-server></app-server>
  //   <hr>
  //   <app-server></app-server>
  //   <hr>
  //   <app-server></app-server>
  // </div>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
