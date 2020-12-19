import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RiskMatrixComponent } from './components'

import { RiskMatrixRoutingModule } from './routing.module'

@NgModule({
	declarations: [
		RiskMatrixComponent
	],
	imports: [
		CommonModule,
		RiskMatrixRoutingModule
	]
})
export class RiskMatrixModule { }