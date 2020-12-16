import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { IntervalGameComponent } from './interval-game.component'

const ROUTES: Routes = [
	{
		path: '',
		component: IntervalGameComponent
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
export class IntervalGameRoutingModule { }