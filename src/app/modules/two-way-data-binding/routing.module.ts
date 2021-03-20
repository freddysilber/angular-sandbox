import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app/app.component'

const ROUTES: Routes = [
	{
		path: '',
		component: AppComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	]
})
export class TwoWayDataBindingRoutingModule { }