import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CounterComponent } from './counter.component'

const ROUTES: Routes = [
	{
		path: '',
		component: CounterComponent
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
export class CounterRoutingModule {

}