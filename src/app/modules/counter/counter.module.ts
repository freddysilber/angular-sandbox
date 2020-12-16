import { NgModule } from '@angular/core'

import { ClickerComponent } from './clicker/clicker.component'
import { CountComponent } from './count/count.component'
import { CounterComponent } from './counter.component'

import { CounterRoutingModule } from './counter-routing.module'

@NgModule({
	declarations: [
		ClickerComponent,
		CountComponent,
		CounterComponent
	],
	imports: [
		CounterRoutingModule
	]
})
export class CounterModule { }