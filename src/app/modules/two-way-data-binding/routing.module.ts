import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SizerComponent } from './components/sizer/sizer.component'

const ROUTES: Routes = [
	{
		path: '',
		component: SizerComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	]
})
export class TwoWayDataBindingRoutingModule { }