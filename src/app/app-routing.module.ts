// Angular
import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
// Components
import { DashboardComponent } from './dashboard/dashboard.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './server/server.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { ExploringPipesComponent } from './exploring-pipes/exploring-pipes.component'
import { SomethingNewComponent } from './something-new/something-new.component'
import { ObservablePracticeComponent } from './observable-practice/observable-practice.component'

const ROUTES: Routes = [
	{ path: '', component: DashboardComponent },
	{
		path: 'counter',
		loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule)
	},
	{ path: 'servers', component: ServersComponent },
	{ path: 'servers/:id/:status', component: ServerComponent },
	{
		path: 'game',
		loadChildren: () => import('./modules/interval-game/interval-game.module').then(m => m.IntervalGameModule)
	},
	{ path: 'reactive-form', component: ReactiveFormComponent },
	{ path: 'pipes', component: ExploringPipesComponent },
	{ path: 'something-new', component: SomethingNewComponent },
	{ path: 'observable-practice', component: ObservablePracticeComponent },
	{
		path: 'features',
		loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
		// RouterModule.forRoot(appRoutes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }