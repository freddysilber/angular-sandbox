import { NgModule } from '@angular/core'

import { AppComponent } from './app/app.component'
import { TwoWayDataBindingRoutingModule } from './routing.module'

const COMPONENTS = [
	AppComponent
]

@NgModule({
	declarations: COMPONENTS,
	imports: [
		TwoWayDataBindingRoutingModule
	]
})
export class AppModule { }