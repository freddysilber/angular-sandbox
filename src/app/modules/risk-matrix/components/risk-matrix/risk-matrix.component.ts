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

	riskMatrix: Matrix = this._riskMatrixService.newMatrix(this._riskMatrixService.matrixDimensions)

	constructor(private _riskMatrixService: RiskMatrixService) {
		this.riskMatrix = this._riskMatrixService.populateMatrixData(this._riskMatrixService.matrixDimensions, this.riskMatrix, this._riskMatrixService.data)
	}

	handleToggle(event): void {
		if (!event.target.checked) {
			this._riskMatrixService.selectedEmitter.next(false)
		}
		this._riskMatrixService.canSelectMultiple = event.target.checked
	}
}