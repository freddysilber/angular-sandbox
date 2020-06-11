import { Component } from '@angular/core'

const OFFLINE: string = 'offline'
const ONLINE: string = 'online'
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
	`]
	// styleUrls: ['./server.component.css']
})
export class ServerComponent {
	serverId: number = Math.random() * 10
	serverStatus: string = OFFLINE

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE
	}

	getServerStatus() {
		return this.serverStatus
	}

	getColor() {
		return this.serverStatus === ONLINE ? 'green' : 'red'
		// return this.serverStatus === ONLINE ? 'lightgreen' : 'lightpink'
	}
}