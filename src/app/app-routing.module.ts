// Angular
import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
// Components
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ServersComponent } from './components/servers/servers.component'
import { ServerComponent } from './components/server/server.component'
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'
import { ExploringPipesComponent } from './components/exploring-pipes/exploring-pipes.component'
import { AnimationsPracticeComponent } from './components/animations-practice/animations-practice.component'
import { ObservablePracticeComponent } from './components/observable-practice/observable-practice.component'
// import { RiskMatrixComponent } from './modules/risk-matrix/components'

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
	{ path: 'animations', component: AnimationsPracticeComponent },
	{ path: 'observable-practice', component: ObservablePracticeComponent },
	{
		path: 'features',
		loadChildren: () => import('./modules/features/features.module').then(m => m.FeaturesModule)
	},
	{
		path: 'riskMatrix',
		loadChildren: () => import('./modules/risk-matrix/risk-matrix.module').then(m => m.RiskMatrixModule)
	},
	{
		path: 'two-way-data-binding',
		loadChildren: () => import('./modules/two-way-data-binding/two-way-data-binding.module').then(m => m.TwoWayDataBindingModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
		// RouterModule.forRoot(appRoutes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }