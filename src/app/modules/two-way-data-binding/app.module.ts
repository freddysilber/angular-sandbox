import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app/app.component'
import { SizerComponent } from './components/sizer/sizer/sizer.component'
import { TwoWayDataBindingRoutingModule } from './routing.module'

const COMPONENTS = [
	AppComponent,
	SizerComponent
]

@NgModule({
	declarations: COMPONENTS,
	imports: [
		RouterModule,
		TwoWayDataBindingRoutingModule
	]
})
export class AppModule { }