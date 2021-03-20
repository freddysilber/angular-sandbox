import { NgModule } from '@angular/core'

import { SizerComponent } from './components/sizer/sizer.component'
import { TwoWayDataBindingRoutingModule } from './routing.module'

const COMPONENTS = [
	SizerComponent
]

@NgModule({
	declarations: COMPONENTS,
	imports: [
		TwoWayDataBindingRoutingModule
	]
})
export class TwoWayDataBindingModule { }