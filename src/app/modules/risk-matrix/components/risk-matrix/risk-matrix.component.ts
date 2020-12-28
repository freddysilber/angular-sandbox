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
		if (!event.target.checked) {
			this._riskMatrixService.selectedEmitter.next(false)
			this._riskMatrixService.resetData()
		}
		this._riskMatrixService.canSelectMultiple = !this._riskMatrixService.canSelectMultiple
	}
}