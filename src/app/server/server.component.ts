import { Component, OnDestroy } from '@angular/core'
import { UtilService } from '../util.service'
import { utils } from 'protractor'

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

	constructor(private UtilService: UtilService) {
		this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE
	}

	getServerStatus = () => this.serverStatus

	getColor = () => this.serverStatus === ONLINE ? this.UtilService.colors.lightgreen : this.UtilService.colors.red

	ngOnDestroy() {
		console.log('ngOnDestroy called! something was removed from the DOM')
	}
}