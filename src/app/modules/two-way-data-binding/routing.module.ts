import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app/app.component'
import { SizerComponent } from './components/sizer/sizer/sizer.component'

const ROUTES: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: 'sizer',
				component: SizerComponent,
			},
			{
				path: '',
				redirectTo: 'sizer',
				pathMatch: 'full'
			}
		],
	},
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	]
})
export class TwoWayDataBindingRoutingModule { }