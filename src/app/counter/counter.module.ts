import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from '../app.component'
import { ClickerComponent } from './clicker/clicker.component'
import { CountComponent } from './count/count.component'
import { CounterComponent } from './counter.component'

@NgModule({
	declarations: [
		ClickerComponent,
		CountComponent,
		CounterComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
		// RouterModule.forChild([
		// 	{
		// 		path: '',
		// 		component: CounterComponent
		// 	}
		// ])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class CounterModule { }