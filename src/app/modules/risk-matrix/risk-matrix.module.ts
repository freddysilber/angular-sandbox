import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
	RiskMatrixComponent,
	RiskCellComponent,
	RiskTableComponent
} from './components'

import { RiskMatrixRoutingModule } from './routing.module'

const COMPONENTS = [
	RiskCellComponent,
	RiskMatrixComponent,
	RiskTableComponent
]

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		RiskMatrixRoutingModule
	]
})
export class RiskMatrixModule { }