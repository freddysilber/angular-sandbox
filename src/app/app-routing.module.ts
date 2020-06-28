import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { CounterComponent } from './counter/counter.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './server/server.component'
import { GameControlComponent } from './interval-game/game-control/game-control.component'

const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'counter', component: CounterComponent },
	{ path: 'servers', component: ServersComponent },
	{ path: 'servers/:id/:status', component: ServerComponent },
	{ path: 'game', component: GameControlComponent },
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}