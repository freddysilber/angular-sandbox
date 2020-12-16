import { NgModule } from '@angular/core'

import { EvenComponent } from './even/even.component'
import { OddComponent } from './odd/odd.component'
import { GameControlComponent } from './game-control/game-control.component'
import { IntervalGameComponent } from './interval-game.component'

import { IntervalGameRoutingModule } from './interval-game-routing.module'
import { CommonModule } from '@angular/common'

@NgModule({
	declarations: [
		EvenComponent,
		OddComponent,
		GameControlComponent,
		IntervalGameComponent
	],
	imports: [
		CommonModule,
		IntervalGameRoutingModule
	]
})
export class IntervalGameModule { }