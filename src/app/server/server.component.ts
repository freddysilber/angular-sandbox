import { Component, OnDestroy, OnInit } from '@angular/core'
import { UtilService } from '../services/util.service'
import { ActivatedRoute } from '@angular/router'

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
})
export class ServerComponent implements OnInit, OnDestroy {
	server: { id: number, status: string }
	serverId: number = Math.random() * 10
	serverStatus: string = OFFLINE

	constructor(private UtilService: UtilService, private route: ActivatedRoute) {
		this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE
	}

	getServerStatus = () => this.serverStatus

	getColor = () => this.serverStatus === ONLINE
		? this.UtilService.colors.lightgreen
		: this.UtilService.colors.red

	ngOnInit() {
		this.server = {
			id: this.route.snapshot.params['id'],
			status: this.route.snapshot.params['status']
		}
		console.log(this.server)
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called! something was removed from the DOM')
	}
}