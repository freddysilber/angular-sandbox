import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { CounterComponent } from './counter/counter.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './server/server.component'
import { GameControlComponent } from './interval-game/game-control/game-control.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { ExploringPipesComponent } from './exploring-pipes/exploring-pipes.component'

const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'counter', component: CounterComponent },
	{ path: 'servers', component: ServersComponent },
	{ path: 'servers/:id/:status', component: ServerComponent },
	{ path: 'game', component: GameControlComponent },
	{ path: 'reactive-form', component: ReactiveFormComponent },
	{ path: 'pipes', component: ExploringPipesComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
		// RouterModule.forRoot(appRoutes, { useHash: true })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}