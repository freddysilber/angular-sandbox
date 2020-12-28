import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers'
import { Matrix } from '../../models'

@Component({
	selector: 'app-risk-matrix',
	templateUrl: './risk-matrix.component.html',
	styleUrls: ['./risk-matrix.component.scss']
})
export class RiskMatrixComponent {

	selectMultiple: boolean = false
	riskMatrix: Matrix = this._riskMatrixService.buildMatrix()

	constructor(private _riskMatrixService: RiskMatrixService) { }

	handleToggle(event): void {
		this._riskMatrixService.selectedEmitter.next(false)
		this._riskMatrixService.resetData()
		this._riskMatrixService.resetFilters()
		this._riskMatrixService.canSelectMultiple = event.target.checked
	}
}