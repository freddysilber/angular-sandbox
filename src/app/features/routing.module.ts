import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
	FeatureDashboardComponent,
	ObservablesComponent
} from './components'

const ROUTES: Routes = [
	{
		path: '',
		component: FeatureDashboardComponent,
		children: [
			{
				path: 'observables',
				component: ObservablesComponent
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class FeaturesRoutingModule { }