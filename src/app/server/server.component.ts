import { Component, OnDestroy } from '@angular/core'

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
export class ServerComponent implements OnDestroy {
	// PROPS!
	serverId: number = Math.random() * 10
	serverStatus: string = OFFLINE

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE
	}

	getServerStatus = () => this.serverStatus

	getColor = () => this.serverStatus === ONLINE ? 'green' : 'red'

	ngOnDestroy() {
		console.log('ngOnDestroy called! something was removed from the DOM')
	}
}